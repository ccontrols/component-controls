import ts from 'typescript';
import { ISymbolParser } from '../ts-utils';
import {
  FunctionProp,
  PropKind,
  PropType,
  JSDocExample,
  JSDocPropTag,
  propValue,
} from '../types';

export const getDeclarationName = (
  node: ts.Declaration,
): string | undefined => {
  const name = (node as ts.NamedDeclaration).name;
  if (name) {
    if (ts.isQualifiedName(name)) {
      return (name as ts.QualifiedName).right.text;
    }
    return name.getText();
  }
  return undefined;
};
export const cleanJSDocText = (s: string): string => {
  const result = s
    .replace(/^[\r\n]+|[\r\n]+$/g, '')
    .replace(/\{\@link *(.*)\}/g, (sub, group) => {
      // replace {@link with markdown links
      const trimmed = group.trim();
      const links = trimmed.includes('|')
        ? trimmed.trim().split('|')
        : trimmed.trim().split(' ');
      return links.length === 1
        ? `[${links[0]}](#${links[0].includes('#') ? '' : links[0]})`
        : `[${links.slice(1).join(' ')}](${links[0]})`;
    });
  if (result.startsWith('- ')) {
    return result.substring(2);
  }
  return result;
};
export const tagCommentToString = (
  comment: ts.JSDocTag['comment'],
): string | undefined => {
  if (Array.isArray(comment)) {
    return cleanJSDocText(
      comment
        .map(c => {
          return c.name ? c.getFullText() : c.text;
        })
        .join(''),
    );
  }
  if (typeof comment === 'string') {
    return cleanJSDocText(comment);
  }
  return undefined;
};

const parseJSDocProperty = (
  parser: ISymbolParser,
  tag: ts.JSDocPropertyLikeTag,
): PropType => {
  const prop: PropType = {
    displayName: getDeclarationName(tag),
  };
  const comment = tagCommentToString(tag.comment);
  if (comment) {
    prop.description = comment;
  }
  if (tag.typeExpression?.type) {
    parser.parseType(prop, tag.typeExpression.type);
  }
  if (tag.isBracketed) {
    prop.optional = true;
  }
  const fullTagText = tag.getText();
  const defRE = /\[.*\=(.*)\]/g.exec(fullTagText);
  const defaultValue = defRE?.[1];
  if (typeof defaultValue !== undefined) {
    propValue(prop, defaultValue);
    if (prop.description) {
      //fix leftovers in comment
      const commentLeftover = /(.*)\] /g.exec(prop.description);
      if (commentLeftover?.[1] && defaultValue?.endsWith(commentLeftover[1])) {
        prop.description = tagCommentToString(
          prop.description.slice(commentLeftover[1].length + 2),
        );
      }
    }
  }
  return prop;
};
export const parseJSDocTag = (
  parser: ISymbolParser,
  prop: PropType,
  tag: ts.JSDocTag,
): PropType => {
  if (ts.isJSDocDeprecatedTag(tag)) {
    prop.deprecated = tagCommentToString(tag.comment) || true;
  } else if (ts.isJSDocReadonlyTag(tag)) {
    prop.readonly = true;
  } else if (ts.isJSDocPublicTag(tag)) {
    prop.visibility = 'public';
  } else if (ts.isJSDocPrivateTag(tag)) {
    prop.visibility = 'private';
  } else if (ts.isJSDocProtectedTag(tag)) {
    prop.visibility = 'protected';
  } else if (ts.isJSDocClassTag(tag)) {
    prop.kind = PropKind.Class;
  } else if (ts.isJSDocEnumTag(tag)) {
    prop.kind = PropKind.Enum;
  } else if (ts.isJSDocTypeTag(tag)) {
    parser.parseType(prop, tag.typeExpression.type);
  } else if (ts.isJSDocParameterTag(tag)) {
    const parameter = parseJSDocProperty(parser, tag);
    const resultAsFn = prop as FunctionProp;
    if (!resultAsFn.parameters) {
      resultAsFn.parameters = [];
    }
    resultAsFn.parameters.push(parameter);
  } else if (ts.isJSDocTypedefTag(tag)) {
    prop.type = tag.name?.text;
  } else if (ts.isJSDocPropertyTag(tag)) {
    Object.assign(prop, parseJSDocProperty(parser, tag));
  } else if (ts.isJSDocReturnTag(tag)) {
    const resultAsFn = prop as FunctionProp;
    if (tag.typeExpression) {
      resultAsFn.returns = parser.parseType({}, tag.typeExpression.type);
    }
    const comment = tagCommentToString(tag.comment);
    if (comment) {
      if (!resultAsFn.returns) {
        resultAsFn.returns = {};
      }
      resultAsFn.returns.description = comment;
    }
  } else if (ts.isJSDocSeeTag(tag)) {
    const comment = /\@see\ *(.*)/g.exec(tag.getText());
    const see = tagCommentToString(comment?.[1]);
    if (see) {
      if (!prop.see) {
        prop.see = [];
      }
      prop.see.push(see);
    }
  } else {
    switch (tag.tagName.text) {
      case 'desc':
      case 'description': {
        prop.description = tagCommentToString(tag.comment);
        break;
      }
      case 'default':
      case 'defaultvalue': {
        propValue(prop, tagCommentToString(tag.comment));
        break;
      }
      case 'summary': {
        prop.summary = tagCommentToString(tag.comment);
        break;
      }
      case 'interface': {
        prop.kind = PropKind.Interface;
        break;
      }

      case 'example': {
        const comment = tagCommentToString(tag.comment);
        if (comment) {
          const match = comment.match(
            // from https://github.com/jaydenseric/jsdoc-md
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
              if (!prop.examples) {
                prop.examples = [];
              }
              prop.examples.push(example);
            }
          }
        }

        break;
      }
      case 'emits':
      case 'fires': {
        const event = tagCommentToString(tag.comment);
        if (event) {
          if (!prop.fires) {
            prop.fires = [];
          }
          prop.fires.push(event);
        }
        break;
      }
      default: {
        if (!prop.tags) {
          prop.tags = [];
        }
        const tagProp: JSDocPropTag = {
          tag: tag.tagName.text,
        };
        const content = tagCommentToString(tag.comment);
        if (content) {
          tagProp.content = content;
        }
        prop.tags.push(tagProp);
        break;
      }
    }
  }
  return prop;
};
export const parseJSDocTags = (
  parser: ISymbolParser,
  declaration?: ts.Node,
): PropType | undefined | null => {
  if (declaration) {
    const result: PropType = {};
    const parentTags = ts.getJSDocTags(declaration.parent) || [];
    const tags = ts.getJSDocTags(declaration).filter(tag => {
      return parentTags.indexOf(tag) < 0;
    });

    for (const tag of tags) {
      if (tag.tagName.text === 'ignore') {
        return null;
      }
      parseJSDocTag(parser, result, tag);
    }
    return result;
  }
  return undefined;
};
