import * as fs from 'fs';
import * as path from 'path';
import readJson from 'read-package-json';
import hostedGitInfo from 'hosted-git-info';
import parseRepositoryURL from '@hutson/parse-repository-url';
import { PackageInfo } from '@component-controls/core';
import { hashStoreId } from './hashStore';
import { PackageInfoOptions } from '../types';
import { getPackageInfo } from './source-options';

export const findUpFile = (
  filePath: string,
  fileName: string | string[],
  levels: number = 10,
): string | null => {
  const files = fs.readdirSync(filePath);
  if (levels === 0) {
    return null;
  }
  const arFiles: string[] = Array.isArray(fileName) ? fileName : [fileName];
  const pckg = files.find(file => arFiles.includes(file));
  if (pckg) {
    return path.resolve(filePath, pckg);
  }
  return findUpFile(path.resolve(filePath, '..'), fileName, levels - 1);
};

const getPackageJson = async (
  filePath?: string,
  opts?: PackageInfoOptions | false,
): Promise<{
  fileName: string;
  packageJSON: { [key: string]: any };
} | null> => {
  return new Promise((resolve, reject) => {
    if (!filePath) {
      return resolve(null);
    }
    if (opts === false) {
      return resolve(null);
    }
    const fileName = findUpFile(
      fs.lstatSync(filePath).isDirectory() ? filePath : path.dirname(filePath),
      opts?.packageJsonName || 'package.json',
      opts?.maxLevels,
    );
    if (!fileName) {
      return resolve(null);
    }
    readJson(fileName, null, false, (err: string, data: object) => {
      if (err) {
        return reject(err);
      }
      return resolve({ fileName, packageJSON: data });
    });
  });
};

export interface PackageInfoReturnType {
  browse: string;
}

export const packageInfo = async (
  partName: string,
  filePath?: string,
  opts?: PackageInfoOptions | false,
): Promise<PackageInfo | undefined> => {
  if (filePath) {
    const { fileName, packageJSON } =
      (await getPackageJson(filePath, opts)) || {};
    if (fileName && packageJSON) {
      const repositoryURL =
        typeof packageJSON.repository === 'string'
          ? packageJSON.repository
          : packageJSON.repository && packageJSON.repository.url;
      const {
        name,
        version,
        dependencies,
        devDependencies,
        peerDependencies,
      } = packageJSON;
      const result: PackageInfo = {
        fileHash: hashStoreId(`${filePath}-${partName}`),
        name,
        version,
        repository: {},
        dependencies,
        devDependencies,
        peerDependencies,
      };
      if (repositoryURL) {
        const templates =
          hostedGitInfo.fromUrl(repositoryURL) ||
          parseRepositoryURL(repositoryURL);
        const fileRelativePath = `${
          packageJSON.repository && packageJSON.repository.directory
            ? `${packageJSON.repository.directory}/`
            : ''
        }${path.relative(path.dirname(fileName), filePath)}`;
        const fillTemplate = (template: string): string => {
          return template
            .replace('auth@', templates.auth || '')
            .replace('{domain}', templates.domain || '')
            .replace('{user}', templates.user || '')
            .replace('{project}', templates.project || '')
            .replace('{#fragment}', '')
            .replace('{path}', fileRelativePath)
            .replace('{treepath}', templates.treepath || '')
            .replace(
              '{/tree/committish}',
              `/${templates.treepath}/${templates.committish || 'master'}`,
            )
            .replace('{committish}', templates.committish || 'master');
        };

        const { browseLink, docsLink, issuesLink } = opts || {};
        const storeBrowseLink = getPackageInfo(
          browseLink,
          partName,
          fillTemplate(templates.browsefiletemplate),
        );
        if (storeBrowseLink) {
          result.repository.browse = storeBrowseLink;
        }
        const storeDocsLink = getPackageInfo(
          docsLink,
          partName,
          fillTemplate(templates.docstemplate),
        );
        if (storeDocsLink) {
          result.repository.docs = storeDocsLink;
        }
        const storeIssuesLink = getPackageInfo(
          issuesLink,
          partName,
          fillTemplate(templates.bugstemplate),
        );
        if (storeIssuesLink) {
          result.repository.issues = storeIssuesLink;
        }
      }
      return result;
    }
  }
  return undefined;
};
