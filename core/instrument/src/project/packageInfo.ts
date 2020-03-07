import fs from 'fs';
import path from 'path';
//@ts-ignore
import readJson from 'read-package-json';
import hostedGitInfo from 'hosted-git-info';
//@ts-ignore
import parseRepositoryURL from '@hutson/parse-repository-url';
import { Repository } from '@component-controls/specification';

const traverseFolder = (
  filePath: string,
  levels: number,
  packageJsonName: string,
): string | null => {
  var files = fs.readdirSync(filePath);
  if (levels === 0) {
    return null;
  }
  const pckg = files.find(file => file === packageJsonName);
  if (pckg) {
    return path.resolve(filePath, pckg);
  }
  return traverseFolder(
    path.resolve(filePath, '..'),
    levels - 1,
    packageJsonName,
  );
};

export interface FindPackageJsonOptions {
  maxLevels?: number;
  packageJsonName?: string;
}

const getPackageJson = async (
  filePath?: string,
  opts?: FindPackageJsonOptions,
): Promise<{
  fileName: string;
  packageJSON: { [key: string]: any };
} | null> => {
  return new Promise((resolve, reject) => {
    if (!filePath) {
      return resolve(null);
    }
    const fileName = traverseFolder(
      path.dirname(filePath),
      opts?.maxLevels || 10,
      opts?.packageJsonName || 'package.json',
    );
    if (!fileName) {
      return resolve(null);
    }
    readJson(fileName, console.error, false, (err: string, data: object) => {
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
  filePath?: string,
  opts?: FindPackageJsonOptions,
): Promise<Repository | undefined> => {
  if (filePath) {
    const { fileName, packageJSON } =
      (await getPackageJson(filePath, opts)) || {};
    if (fileName && packageJSON) {
      const repositoryURL =
        typeof packageJSON.repository === 'string'
          ? packageJSON.repository
          : packageJSON.repository && packageJSON.repository.url;
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

        return {
          browse: fillTemplate(templates.browsefiletemplate),
          docs: fillTemplate(templates.docstemplate),
          issues: fillTemplate(templates.bugstemplate),
        };
      }
    }
  }
  return undefined;
};
