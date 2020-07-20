
      const { HMRStore } = require('@component-controls/store');
      const bundle = require(/Users/atanasster/component-controls/examples/starter/.next/compoonent-controls.js);
      const store = new HMRStore(bundle);

      exports.store = store;

