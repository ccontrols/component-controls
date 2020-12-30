import { Settings, SearchOptions } from '@algolia/client-search';
import { RequestOptions } from '@algolia/transporter';

export interface AlgoliaSearchOptions {
  saveIndex: boolean;
  indexName: string;
  appID: string;
  searchAPIKey: string;
  adminAPIKey: string;
  /**
   * Algolia search options
   * https://www.algolia.com/doc/api-reference/search-api-parameters/
   */
  searchOptions?: RequestOptions & SearchOptions;
  indexOptions?: Settings;
}
