import fs from 'fs';
import path from 'path';
import gitlog, { GitlogOptions } from 'gitlog';
import slocAPI from 'sloc';
import { findUpFile } from '@component-controls/core/node-utils';
import { FileInfo } from '@component-controls/core';
import { CachedFileResource } from './chached-file';
export const getFileIinfo = async (
  filePath: string,
  source?: string,
): Promise<FileInfo> => {
  const cached = new CachedFileResource<FileInfo>(
    'file-stats',
    filePath,
    filePath,
  );
  let result: FileInfo | undefined;
  result = cached.get();
  if (result) {
    return result;
  }
  const sloc = source ? slocAPI(source, 'jsx') : undefined;
  const gitFolder = findUpFile(path.dirname(filePath), '.git');
  if (gitFolder) {
    //try to get file stats from github
    const rootFolder = path.resolve(gitFolder, '..');
    const options: GitlogOptions<
      | 'hash'
      | 'subject'
      | 'authorName'
      | 'authorDate'
      | 'authorEmail'
      | 'committerName'
      | 'committerDate'
      | 'committerEmail'
    > = {
      repo: rootFolder,
      number: 1000,
      file: path.relative(rootFolder, filePath),
      fields: [
        'hash',
        'subject',
        'authorName',
        'authorDate',
        'authorEmail',
        'committerName',
        'committerDate',
        'committerEmail',
      ],
      execOptions: { maxBuffer: 1000 * 1024 },
    };

    try {
      const commits = gitlog(options);
      if (commits.length > 0) {
        result = {
          dateCreated: new Date(commits[commits.length - 1].authorDate),
          dateModified: new Date(commits[0].authorDate),
          sloc,
          commits: commits.map(
            ({
              hash,
              subject,
              authorName,
              authorDate,
              authorEmail,
              committerName,
              committerDate,
              committerEmail,
            }) => ({
              hash,
              subject,
              authorName,
              authorDate: new Date(authorDate).toISOString(),
              authorEmail,
              committerName,
              committerDate: new Date(committerDate).toISOString(),
              committerEmail,
            }),
          ),
        };
        cached.set(result);
        return result;
      }
    } catch (e) {}
  }
  const stats = fs.statSync(filePath);
  result = {
    dateCreated: stats.birthtime,
    dateModified: stats.mtime,
    sloc,
  };
  cached.set(result);
  return result;
};
