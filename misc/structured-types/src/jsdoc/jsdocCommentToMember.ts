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
const trimNewlines = (s: string): string => {
  return s.replace(/^[\r\n]+|[\r\n]+$/g, '');
};

/**
 * Analyzes a JSDoc comment to produce JSDoc member details.
 * @kind function
 * @name jsdocCommentToMember
 * @param {object} jsdocComment JSDoc comment, from a Babel parse result.
 * @returns {JsdocMember|void} JSDoc member, if it’s valid and not ignored.
 * @ignore
 */
export const jsdocCommentToMember = (comment: string): PropType | undefined => {
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

      // Scan tags for membership data, looping tags backwards as later tags
      // override earlier ones.
      for (let index = jsdocBlock.tags.length - 1; index >= 0; index--) {
        const tag = jsdocBlock.tags[index];

        switch (tag.tag) {
          case 'kind':
            if (!result.kind && tag.name && typeNameToPropKind(tag.name))
              result.kind = typeNameToPropKind(tag.name);

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
          case 'desc':
          case 'description': {
            if (!result.description) {
              const tagDescriptionTrimmed = trimNewlines(tag.description);

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
            // Ignore an invalid tag missing a name.
            if (tag.name) {
              // Define the JSDoc parameter with nicely ordered properties.
              const parameter: PropType = {
                displayName: tag.name,
                description: trimNewlines(tag.description),
              };
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
                description: trimNewlines(tag.description),
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
            ret.description = trimNewlines(tag.description);
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
            const tagDescriptionTrimmed = trimNewlines(tag.description);
            if (!result.see) {
              result.see = [];
            }
            // Ignore an invalid tag missing a description.
            if (tagDescriptionTrimmed) {
              const seeTag = tagDescriptionTrimmed.startsWith(':')
                ? tagDescriptionTrimmed.substring(1)
                : tagDescriptionTrimmed;
              result.see.unshift(seeTag);
            }
            break;
          }
          case 'example':
          case 'remarks': {
            const tagDescriptionTrimmed = trimNewlines(tag.description);

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
                  if (tag.tag === 'example') {
                    if (!result.examples) {
                      result.examples = [];
                    }
                    result.examples.unshift(example);
                  }
                  if (tag.tag === 'remarks') {
                    if (!result.remarks) {
                      result.remarks = [];
                    }
                    result.remarks.unshift(example);
                  }
                }
              }
            }

            break;
          }
          case 'ignore':
            // Ignore JSDoc with an ignore tag. It’s best for this tag to be used
            // last in a JSDoc comment, so processing can be bailed earlier.
            return undefined;
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

      if (!result.description) {
        // The description is special as it can be specified without a tag.
        // Description tags override a JSDoc block description as they come later.
        // Description was not populated from tags, so try to get it from the
        // JSDoc block.
        const jsdocBlockDescriptionTrimmed = trimNewlines(
          jsdocBlock.description,
        );

        if (jsdocBlockDescriptionTrimmed) {
          result.description = jsdocBlockDescriptionTrimmed;
        }
      }
      return result;
    }
  }
  return undefined;
};
