import fs from 'fs';
import { Application, TSConfigReader } from 'typedoc';
import { ModuleKind, ScriptTarget} from 'typescript';

import { Node, NodeChildren } from '../types';

const app = new Application();
app.options.addReader(new TSConfigReader());
app.bootstrap({
  mode: 'modules',
  logger: 'none',
  target: ScriptTarget.ES5,
  module: ModuleKind.CommonJS,
  experimentalDecorators: true,
  includeDeclarations: true,
  excludeExternals: true,
});

export const extractTSDoc = (files: string[], entries: string[]): Node[] | undefined => {
  const unresolvedTypeNames: string[] = [];

  const pushPropTable = (nodes: Node[], title: string) => {
    const result: Node[] = [];
    if (nodes) {
      result.push({
        type: 'paragraph',
        children: [{
          type: 'heading',
          depth: 3,
          children: [{
            type: 'text',
            value: title,
          }]
        }]  
      })
      const table: NodeChildren = {
        type: 'table',
        children: [
          { type: 'tableRow', children: [
            { type: 'tableCell', children: [ { type: 'text', value: 'Name'}]},
            { type: 'tableCell', children: [ { type: 'text', value: 'Type'}]},
            { type: 'tableCell', children: [ { type: 'text', value: 'Description'}]},
          ]}
        ]
      }
      result.push({
        type: 'paragraph',
        children: [table]
      });  
      nodes.forEach((child: any) => {
        const tableRow: NodeChildren = { type : 'tableRow' , children: [
          { type: 'tableCell', children: [ { type: 'inlineCode', value: `${child.name}${child.flags.isOptional ? '': '*'}`}]}
        ]}
        tableRow.children.push({
          type: 'tableCell',
          children: child.type ? extractPropType(child.type) : extractFunction(child),
        });
        tableRow.children.push({
          type: 'tableCell',
          children: [{ type: 'text', value: child.comment ? child.comment.shortText : ''}],
        });
        table.children.push(tableRow);
      });  
    }      
    return result;
  }
  const extractFunction = (node: any): Node[] => {
    const result: Node[] = [];
    const declaration: NodeChildren = {
      type: 'paragraph',
      children: [],
    }
    result.push(declaration);
    if (node.kindString !== 'Type literal') {
      if (unresolvedTypeNames.indexOf(node.name) > -1) {
        unresolvedTypeNames.splice(unresolvedTypeNames.indexOf(node.name), 1);
      }

      declaration.children.push({
        type: 'strong',
        children: [{
          type: 'text',
          value: node.name
        }]
      });
    }  
    const signature = node.signatures.find((s: any) => s.kindString === 'Call signature');
      if (signature) {
        declaration.children.push({
          type: 'text',
          value: '(',
        });
        if (signature.parameters) {
          for (let i = 0; i < signature.parameters.length; i +=1) {
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
            declaration.children.push.apply(declaration.children, extractPropType(p.type));
            
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
          declaration.children.push.apply(declaration.children, extractPropType(signature.type));

        }
        declaration.children.push({
          type: 'text',
          value: ';'
        })
        result.push.apply(result, pushPropTable(signature.parameters, 'parameters'));
      }
      return result;
  }


  const extractInterface = (node: any): Node[] => {
    const result: Node[] = [];
    const declaration: NodeChildren = {
      type: 'paragraph',
      children: [],
    }
    result.push(declaration);
    if (unresolvedTypeNames.indexOf(node.name) > -1) {
      unresolvedTypeNames.splice(unresolvedTypeNames.indexOf(node.name), 1);
    }
    const interfaceNode: NodeChildren = {
      type: 'strong',
      children: [{
        type: 'text',
        value: node.name,
      }]
    };
    declaration.children.push(interfaceNode);
    if (node.extendedTypes && node.extendedTypes.length) {
      interfaceNode.children.push({
        type: 'text',
        value: ' extends ',
      });
      node.extendedTypes.forEach((t: any) => {
        interfaceNode.children.push.apply(interfaceNode.children, extractPropType(t));
      })
    }

    if (node.indexSignature) {
      node.indexSignature.forEach((signature: any) => {
        for (let i = 0; i < signature.parameters.length; i +=1) {
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
          declaration.children.push.apply(declaration.children, extractPropType(p.type));
          
        }
        if (signature.type) {
          declaration.children.push({
            type: 'text',
            value: ': ',
          });
          declaration.children.push.apply(declaration.children, extractPropType(signature.type));

        }
      });
    }
    result.push.apply(result, pushPropTable(node.children, 'properties'));
    return result;
  }

  const extractPropType = (p: any): Node[] =>  {
    switch (p.type) {
      case 'reference': {
        if (p.typeArguments) {
          const typeArguments: Node[]= p.typeArguments.reduce((acc: any, a: any, idx: number) => {
            const r = [...acc, ...extractPropType(a)];
            if (idx <  p.typeArguments.length - 1) {
              r.push({
                type: 'text',
                value: ', ',
              })
            }
            return r;
          }, []);
          return [{
            type: 'text',
            value: p.name,
          },
          {
            type: 'text',
            value: '<'
          },
          ...typeArguments,
          {
            type: 'text',
            value: '>'
          }]
        }
        if (unresolvedTypeNames.indexOf(p.name) === -1) {
          unresolvedTypeNames.push(p.name);
        }
        const nodeArguments: Node[]= [];
        
        if (p.nodeArguments) {
          p.nodeArguments.forEach((arg: any) => nodeArguments.push.apply(nodeArguments, extractPropType(arg)));
        }
        return [{
          type: 'link',
          url: `#${p.name.toLowerCase()}`,
          children: [{
            type: 'text',
            value: p.name,
          }
          ]
        },
        ...nodeArguments];
      }
      case 'reflection': {
        if (p.declaration.signatures) {
          return extractFunction(p.declaration);
        }
        return p.declaration.children.map((t: any) => ({ t, value: extractPropType(t.type)})).reduce((acc: any, { t, value}: { t: any, value: Node[] }) => {
          const children: Node[] = [];
          if (t.comment) {
            children.push({
              type: 'paragraph',
              children: [{
                type: 'text',
                value: t.comment.shortText
              }]
            });
  
          }
          children.push({
            type: 'paragraph',
            children: [
              { type: 'strong',
              children: [{
                type: 'text',
                value: t.name
              }]
            },
            {
              type: 'text',
              value: ': '
            },
            ...value
            ]
          });
          return [...acc, ...children];
        }, []);
      }
      case 'intersection': {
        return [
          { 
            type: 'strong',
            children: [
              {
                type: 'text',
                value: 'properties:',
              }
            ]
          },
          ...p.types.reduce((acc: any, t: any, idx: number) => {
            const props = extractPropType(t);
            return [...acc,
              ...props
            ];
          }, []),
          { 
            type: 'text',
            value: '--'
          },

        ];
      }
      case 'array': {
        return [{
          type: 'paragraph',
          children: [
            ...extractPropType(p.elementType),
            {
              type: 'text',
              value: '[]',
            }
          ]
        }];
      }  
      case 'union': {
        return p.types.reduce((acc: Node[], t: any, idx: number) =>  {
          const r = [...acc,...extractPropType(t)];
          if (idx < p.types.length - 1) {
            r.push({ type: 'text', value: ' | '});
          }
          return r;
        }, []);
      }
      case 'intrinsic': {
        return [{
          type: 'text',
          value: p.name,
        }];
      }
      default:
        return [];
    }  
  }
  
  
  const extractTSType = (node: any): Node[] => {
    const result: Node[] = [];
    switch (node.kindString) {
      case 'Type alias': 
      case 'Type literal': 
      default: {
        result.push({
          type: 'heading',
          depth: 2,
          children: [
            { type: 'text',
              value: node.name,
            }
          ]
        });
        if (node.comment && node.comment.shortText) {
          result.push({
            type: 'paragraph',
            children: [{
              type: 'text',
              value: node.comment.shortText,
            }]
          });    
        };
        
        if (node.type) {
          result.push.apply(result, extractPropType(node.type));
        } else {
          node.children.forEach((child: any) => {
            result.push.apply(result, extractPropType(child));
          })
        }  
        break;
      }
      case 'Interface': {
        result.push.apply(result, extractInterface(node));
        break;
      }
      case 'Function': {
        result.push.apply(result, extractFunction(node));
        break;
      }
    }
    return result;
  }  
  const project = app.convert(app.expandInputFiles(files));
  // Project may not have converted correctly
  if (project) { 
    const fName = 'tmp-out-typedoc.json';
    // Alternatively generate JSON output
    try {
      app.generateJson(project, fName);
      const content = JSON.parse(fs.readFileSync(fName, 'utf8'))
      const result: Node[]= [];
      for (const entry of entries) {
        const main = content.children.find((child: any) => child.originalName === entry);
        if (main) {
          main.children.forEach((child: any) => {
            const nodes = extractTSType(child);
            result.push.apply(result, nodes);
          })
        }
      }
      while (unresolvedTypeNames.length > 0) {
        const propName = unresolvedTypeNames[0];
        let propNode;
        for (const child of content.children) {
          if (child.children) {
            propNode = child.children.find((c: any) => c.name === propName);
            if (propNode) {
              break;
            }
          }  
        };
        if (propNode) {
          const nodes = extractTSType(propNode);
          result.push.apply(result, nodes);
        }
        unresolvedTypeNames.splice(0, 1);
      }
      // console.log(JSON.stringify(result, null, 2));
      return result;
    } finally {
      // fs.unlinkSync(fName)
    }  
  }
  return undefined;
}