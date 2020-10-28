/* eslint-disable prefer-spread */
import path from 'path';
import fs from 'fs';
import { Application } from 'typedoc';
import { ModuleKind, ScriptTarget } from 'typescript';
import { getRepoPath } from '../common/package-info';
import {
  createPropsRow,
  createPropsTable,
  PropItem,
} from '../blocks/props-table';
import { Node, NodeChildren } from '../common/types';

const app = new Application();
app.bootstrap({
  mode: 'modules',
  logger: 'console',
  target: ScriptTarget.ES5,
  module: ModuleKind.CommonJS,
  experimentalDecorators: true,
  includeDeclarations: true,
  excludeExternals: true,
  excludePrivate: true,
  esModuleInterop: true,
});

export const extractTSDoc = (
  files: string[],
  entries: string[],
  linkMaps: { [key: string]: string },
): Node[] | undefined => {
  const unresolvedTypeNames: string[] = [];
  const addedTypeNames: string[] = [];
  const repoNames: {
    [key: string]: {
      repo?: string;
      filePath?: string;
      packageName?: string;
      relativePath?: string;
    };
  } = {};

  const extractPropTable = (
    nodes: Node[],
    title: string,
  ): { propsTable: Node[]; table?: NodeChildren } => {
    const props: PropItem[] =
      nodes &&
      nodes.map &&
      nodes.reduce((acc: any, child: any) => {
        if (child.declaration) {
          return [
            ...acc,
            ...child.declaration.children.map((d: any) => ({
              name: d.name,
              isOptional: d.flags ? d.flags.isOptional : true,
              type: d.type
                ? extractPropType(d.type)
                : extractFunction(d, false),
              description: d.comment ? d.comment.shortText : '',
            })),
          ];
        } else {
          return [
            ...acc,
            {
              name: child.name,
              isOptional: child.flags ? child.flags.isOptional : true,
              type: child.type
                ? extractPropType(child.type.type ? child.type : child)
                : extractFunction(child, false),
              description: child.comment ? child.comment.shortText : '',
            },
          ];
        }
      }, []);
    return createPropsTable(title, props);
  };
  const extractFunction = (node: any, extractTable: boolean = true): Node[] => {
    const result: Node[] = [];
    const declaration: NodeChildren = {
      type: 'paragraph',
      children: [],
    };
    addedTypeNames.push(node.name);
    result.push(declaration);
    declaration.children.push({
      type: 'strong',
      children: [
        {
          type: 'text',
          value: 'function',
        },
      ],
    });
    declaration.children.push({
      type: 'text',
      value: ' ',
    });

    if (node.kindString !== 'Type literal') {
      declaration.children.push({
        type: 'text',
        value: node.name,
      });
    }
    const signature =
      node.signatures &&
      node.signatures.find((s: any) => s.kindString === 'Call signature');
    if (signature) {
      declaration.children.push({
        type: 'text',
        value: '(',
      });
      if (signature.parameters) {
        for (let i = 0; i < signature.parameters.length; i += 1) {
          const p: any = signature.parameters[i];
          if (i > 0) {
            declaration.children.push({
              type: 'text',
              value: ', ',
            });
          }
          declaration.children.push({
            type: 'inlineCode',
            value: p.name,
          });
          if (!p.flags.isOptional) {
            declaration.children.push({
              type: 'text',
              value: '*',
            });
          }
          declaration.children.push({
            type: 'text',
            value: ': ',
          });
          declaration.children.push(...extractPropType(p.type));
        }
      }
      declaration.children.push({
        type: 'text',
        value: ')',
      });
      if (signature.type) {
        declaration.children.push({
          type: 'text',
          value: ': ',
        });
        declaration.children.push(...extractPropType(signature.type));
      }
      declaration.children.push({
        type: 'text',
        value: ';',
      });
      if (extractTable) {
        const { propsTable, table } = extractPropTable(
          signature.parameters,
          'parameters',
        );
        if (table && signature.type) {
          table.children.push(
            createPropsRow({
              name: 'returns',
              isOptional: true,
              type: extractPropType(signature.type),
              description: signature.comment ? signature.comment.returns : '',
            }),
          );
        }
        result.push(...propsTable);
      }
    }
    return result;
  };

  const extractInterface = (node: any): Node[] => {
    const result: Node[] = [];
    const declaration: NodeChildren = {
      type: 'paragraph',
      children: [],
    };
    addedTypeNames.push(node.name);
    result.push(declaration);

    if (node.extendedTypes && node.extendedTypes.length) {
      declaration.children.push({
        type: 'strong',
        children: [
          {
            type: 'text',
            value: ' extends ',
          },
          ...node.extendedTypes.reduce(
            (acc: any, t: any) => [...acc, ...extractPropType(t)],
            [],
          ),
        ],
      });
    }
    const children = node.indexSignature;
    if (children) {
      children.forEach((signature: any) => {
        for (let i = 0; i < signature.parameters.length; i += 1) {
          const p: any = signature.parameters[i];
          if (i > 0) {
            declaration.children.push({
              type: 'text',
              value: ', ',
            });
          }
          declaration.children.push({
            type: 'inlineCode',
            value: p.name,
          });
          if (!p.flags.isOptional) {
            declaration.children.push({
              type: 'text',
              value: '*',
            });
          }
          declaration.children.push({
            type: 'text',
            value: ': ',
          });
          declaration.children.push(...extractPropType(p.type));
        }
        if (signature.type) {
          declaration.children.push({
            type: 'text',
            value: ': ',
          });
          declaration.children.push(...extractPropType(signature.type));
        }
      });
    }
    const { propsTable } = extractPropTable(
      node.children || node.type,
      'properties',
    );
    result.push(...propsTable);
    return result;
  };

  const extractPropType = (p: any, extractTable: boolean = false): Node[] => {
    switch (p.type) {
      case 'reference': {
        if (p.typeArguments) {
          const typeArguments: Node[] = p.typeArguments.reduce(
            (acc: any, a: any, idx: number) => {
              const r = [...acc, ...extractPropType(a)];
              if (idx < p.typeArguments.length - 1) {
                r.push({
                  type: 'text',
                  value: ', ',
                });
              }
              return r;
            },
            [],
          );
          return [
            {
              type: 'text',
              value: p.name,
            },
            {
              type: 'text',
              value: '<',
            },
            ...typeArguments,
            {
              type: 'text',
              value: '>',
            },
          ];
        }

        if (unresolvedTypeNames.indexOf(p.name) === -1) {
          unresolvedTypeNames.push(p.name);
        }
        const nodeArguments: Node[] = [];

        if (p.nodeArguments) {
          p.nodeArguments.forEach((arg: any) =>
            nodeArguments.push(...extractPropType(arg)),
          );
        }
        return [
          {
            type: 'link',
            url: linkMaps[p.name] || `#${p.name.toLowerCase()}`,
            children: [
              {
                type: 'text',
                value: p.name,
              },
            ],
          },
          ...nodeArguments,
        ];
      }
      case 'reflection': {
        if (p.declaration.signatures) {
          if (p.declaration.signatures.type) {
            return extractPropType(p.declaration.signatures.type);
          } else {
            return extractFunction(p.declaration, extractTable);
          }
        }
        if (
          p.declaration.indexSignature &&
          p.declaration.indexSignature.length
        ) {
          const signature = p.declaration.indexSignature[0];

          const children = signature.parameters.reduce((acc: any, p: any) => {
            const r = [
              ...acc,
              { type: 'text', value: p.name },
              { type: 'text', value: ': ' },
              ...extractPropType(p.type),
            ];
            return r;
          }, []);
          // console.log(children);
          return [
            {
              type: 'text',
              value: '[',
            },
            ...children,
            {
              type: 'text',
              value: ']',
            },
            {
              type: 'text',
              value: ': ',
            },
            {
              type: 'paragraph',
              children: extractPropType(signature.type),
            },
          ];
        }
        if (!p.declaration.children) {
          return [];
        }
        return p.declaration.children
          .map((t: any) => ({ t, value: extractPropType(t.type) }))
          .reduce((acc: any, { t, value }: { t: any; value: Node[] }) => {
            const children: Node[] = [];
            if (t.comment) {
              children.push({
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    value: t.comment.shortText,
                  },
                ],
              });
            }
            children.push({
              type: 'paragraph',
              children: [
                {
                  type: 'strong',
                  children: [
                    {
                      type: 'text',
                      value: t.name,
                    },
                  ],
                },
                {
                  type: 'text',
                  value: ': ',
                },
                ...value,
              ],
            });
            return [...acc, ...children];
          }, []);
      }
      case 'intersection': {
        const { propsTable } = extractPropTable(p.types, 'properties');
        return propsTable;
      }
      case 'array': {
        return [
          {
            type: 'paragraph',
            children: [
              ...extractPropType(p.elementType),
              {
                type: 'text',
                value: '[]',
              },
            ],
          },
        ];
      }
      case 'union': {
        return [
          {
            type: 'paragraph',
            children: p.types.reduce((acc: Node[], t: any, idx: number) => {
              const r = [...acc, ...extractPropType(t)];
              if (idx < p.types.length - 1) {
                r.push({ type: 'text', value: ' | ' });
              }
              return r;
            }, []),
          },
        ];
      }

      case 'tuple': {
        return [
          {
            type: 'paragraph',
            children: [
              { type: 'text', value: '[' },
              ...p.elements.reduce((acc: Node[], t: any, idx: number) => {
                const r = extractPropType(t);
                if (idx < p.elements.length - 1) {
                  r.push({
                    type: 'text',
                    value: ', ',
                  });
                }
                return [...acc, ...r];
              }, []),
              { type: 'text', value: ']' },
            ],
          },
        ];
      }
      case 'stringLiteral': {
        return [
          {
            type: 'text',
            value: `'${p.value}'`,
          },
        ];
      }

      case 'intrinsic': {
        return [
          {
            type: 'text',
            value: p.name,
          },
        ];
      }
      default:
        console.log('unknown type: ', p.type);
        return [];
    }
  };

  const extractTSType = (node: any, fileName: string): Node[] => {
    const result: Node[] = [];
    result.push({
      type: 'heading',
      depth: 2,
      children: [{ type: 'text', value: node.name }],
    });

    if (node.comment && node.comment.shortText) {
      result.push({
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: node.comment.shortText,
          },
        ],
      });
    }
    if (!repoNames[fileName]) {
      repoNames[fileName] = getRepoPath(path.dirname(path.resolve(fileName)));
      if (repoNames[fileName].filePath) {
        repoNames[fileName].packageName = JSON.parse(
          fs.readFileSync(repoNames[fileName].filePath || '', 'utf8'),
        ).name;
        repoNames[fileName].relativePath = path.relative(
          path.dirname(repoNames[fileName].filePath || './'),
          fileName,
        );
      }
    }

    if (repoNames[fileName]) {
      const { repo, relativePath, packageName } = repoNames[fileName];
      if (!repo) {
        console.log(fileName, repoNames);
      }
      const source = node.sources && node.sources.length && node.sources[0];
      const { line }: { fileName?: string; line?: number; character?: number } =
        source || {};
      if (line) {
        const sourceLocation = fileName.includes('node_modules')
          ? repo
          : `${repo}/${relativePath}#L${line}`;
        result.push({
          type: 'paragraph',
          children: [
            {
              type: 'emphasis',
              children: [
                {
                  type: 'text',
                  value: 'defined in ',
                },
                {
                  type: 'link',
                  url: sourceLocation,
                  children: [
                    {
                      type: 'text',
                      value: `${packageName}/${relativePath}`,
                    },
                  ],
                },
              ],
            },
          ],
        });
      }
    }
    switch (node.kindString) {
      case 'Type alias':
        result.push(...extractPropType(node.type, true));
        break;
      case 'Type literal':
        node.children.forEach((child: any) => {
          result.push(...extractPropType(child, true));
        });
        break;
      case 'Class':
      case 'Interface':
      default: {
        result.push(...extractInterface(node));
        break;
      }
      case 'Function': {
        result.push(...extractFunction(node));
        break;
      }
    }
    return result;
  };
  const project = app.convert(app.expandInputFiles(files));
  // Project may not have converted correctly
  if (project) {
    const fName = 'tmp-out-typedoc.json';
    // Alternatively generate JSON output
    try {
      app.generateJson(project, fName);
      const content = JSON.parse(fs.readFileSync(fName, 'utf8'));
      const result: Node[] = [];
      for (const entry of entries) {
        const main =
          content.children &&
          content.children.find((child: any) => child.originalName === entry);
        if (main && main.children) {
          main.children.forEach((child: any) => {
            if (child.sources) {
              const nodes = extractTSType(child, main.originalName);
              result.push(...nodes);
            }
          });
        }
      }
      while (unresolvedTypeNames.length > 0) {
        const propName = unresolvedTypeNames[0];
        if (addedTypeNames.indexOf(propName) === -1) {
          let propNode;
          let fileName;
          for (const child of content.children) {
            if (child.children) {
              propNode = child.children.find((c: any) => c.name === propName);
              if (propNode) {
                fileName = child.originalName;
                break;
              }
            }
          }
          if (propNode) {
            if (propNode.sources) {
              const nodes = extractTSType(propNode, fileName);
              result.push(...nodes);
            }
          } else {
            console.log('could not find external reference: ', propName);
          }
        }
        unresolvedTypeNames.splice(0, 1);
      }
      // console.log(JSON.stringify(result, null, 2));
      return result;
    } finally {
      fs.unlinkSync(fName);
    }
  } else {
    console.error('could not compile project');
  }
  return undefined;
};
