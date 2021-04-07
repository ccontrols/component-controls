  const store = loadStore(require(path.resolve(__dirname, '{{=it.bundlePath}}')));
  const renderFn = store.config.renderFn;