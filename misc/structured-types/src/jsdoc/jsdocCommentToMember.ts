//original code from https://github.com/jaydenseric/jsdoc-md

import { parse } from 'comment-parser/lib';
import { deconstructJsdocNamepath } from './deconstructJsdocNamepath';
import { defaultOptions } from './COMMENT_PARSER_OPTIONS';
import {
  PropType,
  JSDocExample,
  ObjectProp,
  ValueProp,
  FunctionProp,
  PropKind,
} from '../types';
import { typeNameToPropKind } from '../types';

const transformText = (s: string): string => {
  const result = s
    .replace(/^[\r\n]+|[\r\n]+$/g, '')
    .replace(/\{\@link *(.*)\}/g, (sub, group) => {
      // replace {@link with markdown links
      const trimmed = group.trim();
      const links = trimmed.includes('|')
        ? trimmed.trim().split('|')
        : trimmed.trim().split(' ');
      return links.length === 1
        ? `[${links[0]}](#)`
        : `[${links.slice(1).join(' ')}](${links[0]})`;
    });
  if (result.startsWith('- ')) {
    return result.substring(2);
  }
  return result;
};

/**
 * Analyzes a JSDoc comment to produce JSDoc member details.
 * @kind function
 * @name jsdocCommentToMember
 * @param {object} jsdocComment JSDoc comment, from a Babel parse result.
 * @returns {JsdocMember|void} JSDoc member, if it’s valid and not ignored.
 * @ignore
 */
export const jsdocCommentToMember = (
  comment: string,
): PropType | undefined | null => {
  const jsdoc = parse(
    `/**
${comment}
    */`,
    defaultOptions,
  );
  for (const jsdocBlock of jsdoc) {
    // Ignore JSDoc without tags.
    if (jsdocBlock && jsdocBlock.tags) {
      const result: PropType = {};
      let namepath: string | undefined = undefined;

      for (let index = jsdocBlock.tags.length - 1; index >= 0; index--) {
        const tag = jsdocBlock.tags[index];

        switch (tag.tag) {
          case 'kind':
            if (!result.kind && tag.name && typeNameToPropKind(tag.name))
              result.kind = typeNameToPropKind(tag.name);

            break;
          case 'class':
            result.kind = PropKind.Class;
            break;
          case 'object':
            result.kind = PropKind.Object;
            break;
          case 'interface':
            result.kind = PropKind.Interface;
            break;
          case 'private':
            result.visibility = 'private';
            break;
          case 'public':
            result.visibility = 'public';
            break;
          case 'protected':
            result.visibility = 'protected';
            break;
          case 'readonly':
            result.readonly = true;
            break;

          case 'name':
            if (
              !namepath &&
              // Ignore an invalid tag missing a name.
              tag.name
            ) {
              namepath = tag.name;
            }

            break;

          case 'default':
            (result as ValueProp).value = tag.name;

            break;
          case 'typedef':
            // Ignore an invalid tag missing a name.
            if (tag.name) {
              if (!namepath) {
                namepath = tag.name;
              }
              if (!result.kind && tag.type && typeNameToPropKind(tag.type)) {
                result.kind = typeNameToPropKind(tag.type);
              }
            }

            break;
          case 'callback':
            if (tag.name) {
              if (!result.kind) {
                // A special case; the tag implies this type so this data is not
                // what is actually at the associated code file location.
                result.kind = PropKind.Type;
              }
              if (!namepath) {
                namepath = tag.name;
              }
            }

            break;
          case 'type':
            if (!result.kind && tag.type && typeNameToPropKind(tag.type)) {
              result.kind = typeNameToPropKind(tag.type);
            }
            break;
          case 'deprecated':
            result.deprecated =
              tag.name || tag.description
                ? `${tag.name ? `${tag.name} ` : ''}${tag.description || ''}`
                : 'yes';
            break;
          case 'summary':
            result.summary = tag.description;
            break;
          case 'desc':
          case 'description': {
            if (!result.description) {
              const tagDescriptionTrimmed = transformText(tag.description);

              // Ignore an invalid tag missing a description.
              if (tagDescriptionTrimmed) {
                result.description = tagDescriptionTrimmed;
              }
            }

            break;
          }
          case 'arg':
          case 'argument':
          case 'param': {
            if (tag.name) {
              const parameter: PropType = {
                displayName: tag.name,
              };
              const trimmed = transformText(tag.description);
              if (trimmed) {
                parameter.description = trimmed;
              }
              if (
                typeof tag.type !== 'undefined' &&
                typeNameToPropKind(tag.type)
              ) {
                parameter.kind = typeNameToPropKind(tag.type);
              }
              if (typeof tag.default !== 'undefined') {
                (parameter as ValueProp).value = tag.default;
              }
              if (tag.optional) {
                parameter.optional = true;
              }
              const resultAsFn = result as FunctionProp;
              if (!resultAsFn.parameters) {
                resultAsFn.parameters = [];
              }
              resultAsFn.parameters.unshift(parameter);
            }

            break;
          }
          case 'prop':
          case 'property': {
            // Ignore an invalid tag missing a name.
            if (tag.name) {
              // Define the JSDoc property with nicely ordered properties.
              const property: PropType = {
                displayName: tag.name,
                description: transformText(tag.description),
              };
              if (
                typeof tag.type !== 'undefined' &&
                typeNameToPropKind(tag.type)
              ) {
                property.kind = typeNameToPropKind(tag.type);
              }
              if (typeof tag.default !== 'undefined') {
                (property as ValueProp).value = tag.default;
              }
              if (tag.optional) {
                property.optional = true;
              }
              const resultAsObj = result as ObjectProp;
              if (!resultAsObj.properties) {
                resultAsObj.properties = [];
              }
              resultAsObj.properties.unshift(property);
            }

            break;
          }
          case 'return':
          case 'returns': {
            const ret: PropType = {};

            if (tag.type && typeNameToPropKind(tag.type)) {
              ret.kind = typeNameToPropKind(tag.type);
            }
            const trimmed = transformText(tag.description);
            if (trimmed) {
              ret.description = trimmed;
            }
            (result as FunctionProp).returns = ret;

            break;
          }
          case 'emits':
          case 'fires': {
            if (!result.fires) {
              result.fires = [];
            }
            if (
              // Ignore an invalid tag missing a name.
              tag.name &&
              // Ignore a duplicate name.
              !result.fires.some(({ data }) => data === tag.name)
            ) {
              result.fires.unshift({
                data: tag.name,
              });
            }

            break;
          }
          case 'see': {
            const tagDescriptionTrimmed = transformText(tag.description);
            if (!result.see) {
              result.see = [];
            }
            if (tagDescriptionTrimmed) {
              result.see.unshift(tagDescriptionTrimmed);
            }
            break;
          }
          case 'example': {
            const tagDescriptionTrimmed = transformText(tag.description);

            // Ignore an invalid tag missing a description.
            if (tagDescriptionTrimmed) {
              const match = tagDescriptionTrimmed.match(
                // Group what comes before the caption and content so their
                // lengths can be used to derive offsets and then code locations
                // for both.
                /^(?<beforeContent>(?:(?<beforeCaption>\s*<caption>)(?<captionData>[^]*?)<\/caption>(?:\n+|[ \t])?)?)(?<contentData>[^]+)?/u,
              );
              if (match) {
                const { groups: { captionData, contentData } = {} } = match;
                if (captionData || contentData) {
                  const example: JSDocExample = {};

                  if (captionData) {
                    example.caption = captionData;
                  }

                  if (contentData) {
                    example.content = contentData;
                  }
                  if (!result.examples) {
                    result.examples = [];
                  }
                  result.examples.unshift(example);
                }
              }
            }

            break;
          }
          case 'ignore':
            return null;
          default: {
            const tagContentTrimmed = transformText(tag.description);
            if (!result.tags) {
              result.tags = [];
            }
            result.tags.unshift({
              tag: tag.tag,

              content: `${tag.name}${
                tag.name && tagContentTrimmed ? ' ' : ''
              }${tagContentTrimmed}`,
            });
            break;
          }
        }
      }

      // Ignore JSDoc without a kind or namepath.
      if (namepath) {
        try {
          const { name } = deconstructJsdocNamepath(namepath);

          result.displayName = name;
        } catch (error) {
          throw new Error(error.message);
        }
      }
      return result;
    }
  }
  return undefined;
};
