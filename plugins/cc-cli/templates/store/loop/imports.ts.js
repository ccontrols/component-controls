  const documents = extractDocuments({ config, configPath });
  if (documents) {
    documents.filter((file: string) => !isMDXDocument(file, config.instrument)).forEach((file: string) => {
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