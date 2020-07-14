import { LoadingStore, Store } from '@component-controls/loader';

const bundle = require('@component-controls/webpack-compile/bundle');

const store: LoadingStore = new Store(bundle);

export { store };
