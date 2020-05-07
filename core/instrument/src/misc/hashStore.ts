import { createHash } from 'crypto';

export const hashStoreId = (name: string) =>
  createHash('md5')
    .update(name)
    .digest('hex');
