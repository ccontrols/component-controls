import {
  getHomePath,
  getRoutePath,
  getDocPath,
  getStoryPath,
} from '../src/document-utils';
import { getDefaultStore, Store } from '../src/document';
import { defaultBuildConfig } from '../src/configuration';
import { deepMerge } from '../src';
describe('paths', () => {
  const storeDefault: Store = deepMerge(getDefaultStore(), {
    config: defaultBuildConfig,
    stories: {
      'api-introducetion--story-mame': {
        name: 'StoryName',
      },
      'api-introducetion--dynamic': {
        name: 'Dynamic',
        dynamicId: 'api-introducetion--story-mame',
      },
    },
  });
  const storeSiteRoot1: Store = deepMerge(storeDefault, {
    config: {
      siteRoot: '/root',
    },
  });
  const storeSiteRoot2: Store = deepMerge(storeDefault, {
    config: {
      siteRoot: '/root/',
    },
  });

  it('home path "/"', () => {
    expect(getHomePath(storeDefault)).toEqual('/');
  });
  it('home path "/root"', () => {
    expect(getHomePath(storeSiteRoot1)).toEqual('/root');
  });
  it('home path "/root/"', () => {
    expect(getHomePath(storeSiteRoot2)).toEqual('/root');
  });

  it('route home page "/"', () => {
    expect(getRoutePath(storeDefault, '/')).toEqual('/');
  });
  it('route home page "/root"', () => {
    expect(getRoutePath(storeSiteRoot1, '/')).toEqual('/root');
  });
  it('route home page "/root/"', () => {
    expect(getRoutePath(storeSiteRoot2, '/')).toEqual('/root');
  });

  it('route "/custom/route" with root "/"', () => {
    expect(getRoutePath(storeDefault, '/custom/route')).toEqual(
      '/custom/route',
    );
  });
  it('route "/custom/route" with root "/root"', () => {
    expect(getRoutePath(storeSiteRoot1, '/custom/route')).toEqual(
      '/root/custom/route',
    );
  });
  it('route "/custom/route" with root "/root/"', () => {
    expect(getRoutePath(storeSiteRoot2, '/custom/route')).toEqual(
      '/root/custom/route',
    );
  });

  it('document route with title with root "/"', () => {
    expect(
      getDocPath(
        'story',
        { title: 'API/Introducetion', componentsLookup: {} },
        storeDefault,
        'doc',
        'test',
      ),
    ).toEqual('/docs/api-introducetion/test');
  });
  it('document route with title with root "/root/"', () => {
    expect(
      getDocPath(
        'story',
        { title: 'API/Introducetion', componentsLookup: {} },
        storeSiteRoot2,
        'doc',
        'test',
      ),
    ).toEqual('/root/docs/api-introducetion/test');
  });
  it('document route with name with root "/"', () => {
    expect(getDocPath('story', undefined, storeDefault, 'Doc name')).toEqual(
      '/docs/doc-name',
    );
  });
  it('document route with name with root "/root/"', () => {
    expect(getDocPath('story', undefined, storeSiteRoot2, 'Doc-name')).toEqual(
      '/root/docs/doc-name',
    );
  });

  it('story route with title with root "/"', () => {
    expect(
      getStoryPath(
        'api-introducetion--story-mame',
        undefined,
        storeDefault,
        'test',
      ).path,
    ).toEqual('/docs/api-introducetion--story-mame/test');
  });
  it('story route with title with root "/root/"', () => {
    expect(
      getStoryPath(
        'api-introducetion--story-mame',
        undefined,
        storeSiteRoot2,
        'test',
      ).path,
    ).toEqual('/root/docs/api-introducetion--story-mame/test');
  });
  it('story route with dynmic id with root "/root/"', () => {
    const { path, query } = getStoryPath(
      'api-introducetion--dynamic',
      undefined,
      storeSiteRoot2,
      'test',
    );
    expect(path).toEqual('/root/docs/api-introducetion--story-mame/test');
    expect(query).toEqual('story=Dynamic');
  });
});
