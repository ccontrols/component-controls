  const documents = extractDocuments({ config, configPath });
  if (documents) {
    documents.filter(file => !isMDXDocument(file, config.instrument)).forEach(file => {
      const exports = require(file);
      const doc = exports.default;
      const examples = Object.keys(exports)
        .filter(key => key !== 'default')
        .map(key => exports[key]);

      if (examples.length) {
        describe(doc.title, () => {
          examples.forEach(example => {
            it(example.name, async () => {
{{=it.render}}
            });
          });
        });
      }
    });
  }