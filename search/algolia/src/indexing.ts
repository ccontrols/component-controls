import algoliasearch from 'algoliasearch';
import {
  Store,
  SearchFields,
  docToSearchObject,
} from '@component-controls/core';
import { log } from '@component-controls/logger';
import { AlgoliaSearchOptions } from './types';

module.exports = async (store: Store): Promise<void> => {
  const { options, fields } = store.config.search || {};
  if (!options) {
    return;
  }
  const algolia = options as AlgoliaSearchOptions;
  const logName = 'algolia search';
  const client = algoliasearch(algolia.appID, algolia.adminAPIKey);
  log(logName, `initializing index "${algolia.indexName}"`);
  const index = client.initIndex(algolia.indexName);
  if (algolia.indexOptions) {
    await index.setSettings(algolia.indexOptions);
  }
  let existing: string[] = [];
  await index.browseObjects<SearchFields>({
    query: '', // Empty query will match all records
    attributesToRetrieve: ['objectID'],
    batch: batch => {
      existing = existing.concat(batch.map(({ objectID }) => objectID));
    },
  });
  //iterate through all the pages
  const objects: SearchFields[] = Object.keys(store.docs).map(key => {
    const doc = store.docs[key];
    return docToSearchObject(doc, fields);
  });
  const objectsToDelete = existing.filter(
    objectID => !objects.find(e => e.objectID === objectID),
  );
  if (objectsToDelete.length) {
    log(logName, `removing ${objectsToDelete.length} obsolete objects`);
    await index.deleteObjects(objectsToDelete);
  }
  log(logName, `saving ${objects.length} objects`);
  await index.saveObjects(objects, {
    autoGenerateObjectIDIfNotExist: false,
  });
  log(logName, `finished`);
};
