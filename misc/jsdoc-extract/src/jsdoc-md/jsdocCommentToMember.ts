//original code from https://github.com/jaydenseric/jsdoc-md

import { parse } from 'comment-parser/lib';
import { deconstructJsdocNamepath } from './deconstructJsdocNamepath';
import { defaultOptions } from './COMMENT_PARSER_OPTIONS';
import { JSDocType, JSDocExample, TSType } from '../utils';

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
export const jsdocCommentToMember = (
  comment: string,
): JSDocType | undefined => {
  const jsdoc = parse(
    // Restore the start `/*` and end `*/` that the Babel parse result excludes,
    // so that the JSDoc comment parser can accept it.
    `/*${comment}*/`,
    defaultOptions,
  );
  for (const jsdocBlock of jsdoc) {
    // Ignore JSDoc without tags.
    if (jsdocBlock && jsdocBlock.tags) {
      const result: JSDocType = {
        type: 'undefined',
      };

      // Scan tags for membership data, looping tags backwards as later tags
      // override earlier ones.
      for (let index = jsdocBlock.tags.length - 1; index >= 0; index--) {
        const tag = jsdocBlock.tags[index];

        switch (tag.tag) {
          case 'kind':
            if (
              !result.kind &&
              // Ignore an invalid tag missing a name.
              tag.name
            )
              result.kind = tag.name;

            break;
          case 'name':
            if (
              !result.namepath &&
              // Ignore an invalid tag missing a name.
              tag.name
            ) {
              result.namepath = tag.name;
            }

            break;
          case 'typedef':
            // Ignore an invalid tag missing a name.
            if (tag.name) {
              if (!result.kind) {
                result.kind = 'typedef';
              }

              if (!result.namepath) {
                result.namepath = tag.name;
              }
              if (!result.type && tag.type) {
                result.type = tag.type as TSType;
              }
            }

            break;
          case 'callback':
            // A callback tag is a typedef with an implied function type.
            // Ignore an invalid tag missing a name.
            if (tag.name) {
              if (!result.kind) {
                result.kind = 'typedef';
              }

              if (!result.namepath) {
                result.namepath = tag.name;
              }

              if (!result.type) {
                // A special case; the tag implies this type so this data is not
                // what is actually at the associated code file location.
                result.type = 'function';
              }
            }

            break;
          case 'type':
            if (
              !result.type &&
              // Ignore an invalid tag missing a type.
              tag.type
            ) {
              result.type = tag.type as TSType;
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
              const parameter: JSDocType = {
                name: tag.name,
                type: tag.type as TSType,
                optional: tag.optional,
                value: tag.default,
                description: trimNewlines(tag.description),
              };
              if (!result.parameters) {
                result.parameters = [];
              }
              result.parameters.unshift(parameter);
            }

            break;
          }
          case 'prop':
          case 'property': {
            // Ignore an invalid tag missing a name.
            if (tag.name) {
              // Define the JSDoc property with nicely ordered properties.
              const property: JSDocType = {
                name: tag.name,
                type: tag.type as TSType,
                optional: tag.optional,
                value: tag.default,
                description: trimNewlines(tag.description),
              };
              if (!result.properties) {
                result.properties = [];
              }
              result.properties.unshift(property);
            }

            break;
          }
          case 'return':
          case 'returns': {
            if (!result.returns) {
              result.returns = {};
            }
            // Ignore an invalid tag missing both a type and description.

            if (!result.returns.type && tag.type) {
              result.returns.type = tag.type;
            }

            if (!result.returns.description) {
              result.returns.description = trimNewlines(tag.description);
            }

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
              result.see.unshift(tagDescriptionTrimmed);
            }
            break;
          }
          case 'example': {
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
            // Ignore JSDoc with an ignore tag. It’s best for this tag to be used
            // last in a JSDoc comment, so processing can be bailed earlier.
            return undefined;
        }
      }

      // Ignore JSDoc without a kind or namepath.
      if (result.namepath) {
        try {
          const { memberof: memberofNamepath, name } = deconstructJsdocNamepath(
            result.namepath,
          );

          if (memberofNamepath) {
            result.memberof = memberofNamepath;
          }
          result.name = name;
        } catch (error) {
          throw new Error(error.message);
        }
      }

      // Automatically add a missing `event:` prefix to an event name.
      if (
        result.kind === 'event' &&
        result.name &&
        !result.name.startsWith('event:')
      ) {
        result.name = `event:${name}`;
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
