import {
  Component,
  Components,
  getComponentName,
  CURRENT_STORY,
} from '@component-controls/core';

import { useStore } from './store';
import { useStory } from './story';
import { useCurrentDocument } from './document';

export interface ComponentInputProps {
  /**
   * Specify the component(s), for which to have information displayed.
   * The default, a value of `"."` will indicate to display information for the current component (associated with the current Story).
   * If an array of components is specified, each component will be displayed in a separate tab.
   */
  of?: typeof CURRENT_STORY | any;

  /**
   * some component-oriented ui components can also be driven by a story id (name). ie the PropsTable can display component props, or story controls
   */
  name?: string;
}

/**
 * If the `of` property is specified, will return the listed components, if `of` is not specified, will return the components specified in the component and subcomponent properties of the document or the story.
 */
export const useComponents = ({
  of = CURRENT_STORY,
  name,
}: ComponentInputProps): Components => {
  const store = useStore();
  const story = useStory({ id: name });
  const currentDoc = useCurrentDocument();
  const { component: storyComponentName } = story || {};
  const storyComponent = getComponentName(storyComponentName);
  const doc = story && story.doc ? store.docs[story.doc] : currentDoc;
  const component =
    storyComponent && doc && doc.componentsLookup
      ? store.components[doc.componentsLookup[storyComponent]]
      : undefined;

  let components: Components | undefined = undefined;
  const getComponents = (
    components: { [key: string]: any } | undefined,
  ): Components => {
    const getComponent = (name: string) =>
      doc?.componentsLookup[name] &&
      store?.components[doc.componentsLookup[name]];
    return store && doc && components
      ? Object.keys(components).reduce((acc, key) => {
          const comp = components[key];
          if (comp === CURRENT_STORY) {
            const comps: Record<string, Component> = {};
            const name = getComponentName(doc.component);
            if (name) {
              const component = getComponent(name);
              if (component) {
                comps[name] = component;
              }
            }
            if (doc.subcomponents) {
              Object.keys(doc.subcomponents).forEach(subKey => {
                const name = getComponentName(doc.subcomponents?.[subKey]);
                if (name) {
                  const component = getComponent(name);
                  if (component) {
                    comps[name] = component;
                  }
                }
              });
            }
            return { ...acc, ...comps };
          }
          const name =
            getComponentName(comp) || Object.keys(doc.componentsLookup)[0];
          if (name) {
            const component = getComponent(name);
            if (component) {
              return { ...acc, [key]: component };
            }
          }
          return acc;
        }, {})
      : {};
  };
  if (of === CURRENT_STORY && story) {
    if (component) {
      const name = getComponentName(component);
      if (name) {
        components = {
          [name]: component,
          ...getComponents(story.subcomponents),
        };
      } else {
        components = getComponents(story.subcomponents);
      }
    } else {
      components = getComponents(story.subcomponents);
    }
  } else {
    components = getComponents({ of });
  }
  return components;
};

/**
 * If the `of` property is specified, will return the listed component, if `of` is not specified, will return the component specified in the component property of the document or the story.
 */

export const useComponent = ({
  of = CURRENT_STORY,
  name,
}: ComponentInputProps): Component | undefined => {
  const story = useStory({ id: name });
  const store = useStore();
  const doc = story && story.doc ? store.docs[story.doc] : undefined;
  let component;
  if (of === CURRENT_STORY) {
    component = story ? story.component : doc?.component;
  } else {
    component = of;
  }
  const componentName = getComponentName(component);
  return componentName && doc && doc.componentsLookup
    ? store.components[doc.componentsLookup[componentName]]
    : undefined;
};

/**
 * returns the number of prop-info properties count for the current document
 * if the current document has more than one component assigned - will return the sum
 */

export const useCurrentPropsCount = (input: ComponentInputProps): number => {
  const components = useComponents(input);
  const store = useStore();
  const doc = useCurrentDocument();
  return components && doc
    ? Object.keys(components).reduce((acc, key) => {
        const component = store.components[doc.componentsLookup[key]];
        return acc + Object.keys(component.info?.props || {}).length;
      }, 0)
    : 0;
};
