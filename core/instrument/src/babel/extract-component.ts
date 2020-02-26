import traverse from '@babel/traverse';
import {
  StoriesGroup,
  StoryArguments,
  StoryComponent,
} from '@component-controls/specification';

const componentFromParams = (
  parameters?: StoryArguments,
): string | undefined => {
  if (parameters) {
    let component = parameters.find(p => p.name === 'component');
    if (!component) {
      const params = parameters.find(p => p.name === 'parameters');
      if (params) {
        component = (params.value as StoryArguments).find(
          p => p.name === 'component',
        );
      }
    }
    if (component) {
      if (typeof component.value === 'string') {
        return component.value as string;
      }
      if (
        Array.isArray(component.value) &&
        component.value.length > 0 &&
        typeof component.value[0].value === 'string'
      ) {
        return component.value[0].value;
      }
    }
  }
  return undefined;
};

const findComponentImport = (
  ast: any,
  componentName: string,
): StoryComponent | undefined => {
  let result: StoryComponent | undefined = undefined;
  traverse(ast, {
    ImportDeclaration: (path: any) => {
      const node = path.node;
      for (let i = 0; i < node.specifiers.length; i += 1) {
        const specifier = node.specifiers[i];
        if (specifier.local && specifier.local.name === componentName) {
          result = {
            name: specifier.local.name,
            imported: specifier.imported
              ? specifier.imported.name
              : specifier.type === 'ImportDefaultSpecifier'
              ? 'default'
              : undefined,
            from: node.source ? node.source.value : undefined,
            loc: node.loc,
          };
          path.skip();
          break;
        }
      }
    },
  });
  return result;
};

type PrettifyFn = (code: string) => Promise<string>;
export const extractComponent = async (
  ast: any,
  kind: StoriesGroup,
  prettifyFn: PrettifyFn,
) => {
  const prettyImport = async (
    component: StoryComponent,
  ): Promise<StoryComponent> => {
    return {
      ...component,
      import: await prettifyFn(
        component.imported
          ? `import { ${component.name} } from '${component.from}';`
          : `import ${component.name} from '${component.from}';`,
      ),
    };
  };
  const componentName = componentFromParams(kind.parameters);
  if (componentName) {
    const component = findComponentImport(ast, componentName);
    if (component) {
      kind.component = await prettyImport(component);
    }
  }
  Object.keys(kind.stories).forEach(async (name: string) => {
    const story = kind.stories[name];
    const componentName = componentFromParams(story.parameters);
    if (componentName) {
      const component = findComponentImport(ast, componentName);
      if (component) {
        story.component = await prettyImport(component);
      }
    }
  });
};
