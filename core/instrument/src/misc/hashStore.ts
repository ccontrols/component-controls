import { createHash } from 'crypto';

export const hashStoreId = (name: string): string =>
  createHash('md5').update(name).digest('hex');

export const componentKey = (filePath: string, componentName: string): string =>
  hashStoreId(`${filePath}-${componentName}`);
