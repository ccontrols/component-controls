import { loader } from 'webpack';
import { StoriesStore } from '@component-controls/specification';

const store: StoriesStore = {
  kinds: {},
  stories: {},
  components: {},
};

export const addStoriesKind = async (
  added: StoriesStore,
  context: loader.LoaderContext,
) => {
  Object.keys(added.kinds).forEach(key => {
    store.kinds[key] = {
      ...added.kinds[key],
      fileName: context.resourcePath,
    };
  });
  Object.keys(added.components).forEach(key => {
    store.components[key] = {
      ...added.components[key],
    };
    const { from } = added.components[key];
    if (typeof from === 'string') {
      context.resolve(context.context, from, function(
        err: any,
        result: string,
      ) {
        if (!err) {
          store.components[key].request = result;
        } else {
          console.error(err);
        }
      });
    }
  });
  Object.keys(added.stories).forEach(key => {
    store.stories[key] = { ...added.stories[key] };
  });
};
export default store;
