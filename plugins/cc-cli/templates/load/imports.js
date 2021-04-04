  const configPath = path.resolve(__dirname, '{{=it.configPath}}');
  const config = loadConfigurations(configPath);
  if (!config.renderFn) {
    config.renderFn = reactRender;
  }