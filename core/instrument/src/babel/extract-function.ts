import { Story, Example } from '@component-controls/core';
import traverse, { NodePath } from '@babel/traverse';
import { FunctionDeclaration, VariableDeclarator } from '@babel/types';
import { extractAttributes } from './extract-attributes';
import { extractFunctionParameters } from './extract-function-parameters';
import { followStoryImport } from './follow-imports';
import { sourceLocation } from '../misc/source-location';
import { InstrumentOptions } from '../types';

export const extractFunction = (
  _options: InstrumentOptions,
  { source, filePath }: { source: string; filePath: string },
  path: NodePath,
  declaration: VariableDeclarator | FunctionDeclaration,
  name: string,
  template: Example | undefined,
  locals: Record<string, any>,
): Story | undefined => {
  if (declaration.type === 'VariableDeclarator' && declaration.init) {
    switch (declaration.init.type) {
      case 'ArrowFunctionExpression': {
        const el = declaration.init.body;
        const story: Story = {
          loc: sourceLocation(el.loc),
          name,
          id: name,
        };
        traverse(path.node, extractFunctionParameters(story), path.scope);
        return story;
      }
      case 'Identifier': {
        return followStoryImport(
          name,
          declaration.init.name,
          filePath,
          source,
          _options,
        );
      }
      case 'ObjectExpression': {
        const attributes = extractAttributes(declaration.init);
        const story: Story = {
          name,
          id: name,
          ...attributes,
        };
        if (template) {
          story.loc = template.loc;
          story.arguments = template.arguments;
        }
        return story;
      }
      case 'CallExpression': {
        //template.bind
        const callee: any = declaration.init.callee;
        if (callee.property?.name === 'bind') {
          const calleeFn = callee.object;
          if (calleeFn?.name) {
            const template = locals[calleeFn.name];
            if (template) {
              const story: Story = {
                loc: template.loc,
                name,
                id: name,
                arguments: template.arguments,
              };
              return story;
            }
          }
        }
      }
    }
  } else if (declaration.type === 'FunctionDeclaration') {
    const story: Story = {
      loc: sourceLocation(declaration.body.loc),
      name,
      id: name,
    };
    traverse(path.node, extractFunctionParameters(story), path.scope);
    return story;
  }
  return undefined;
};

export const extractVarFunction = (
  _options: InstrumentOptions,
  { source, filePath }: { source: string; filePath: string },
  path: any,
  template: Example | undefined,
  locals: Record<string, any>,
): Story | undefined => {
  const { declarations } = path.node;
  if (Array.isArray(declarations) && declarations.length > 0) {
    const declaration = declarations[0];
    if (declaration) {
      const name = declaration.id.name;

      const story = extractFunction(
        _options,
        { source, filePath },
        path,
        declaration,
        name,
        template,
        locals,
      );
      if (story && story.name) {
        return story;
      }
    }
  }
  return undefined;
};
