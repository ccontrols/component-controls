import chalk from 'chalk';

export type LogLevel = 'all' | 'errors' | 'none';

export interface LogOptions {
  logLevel?: LogLevel;
  colors: [number, number, number];
}

const defaultOptions: LogOptions = {
  logLevel: 'all',
  colors: [244, 147, 66],
};

let logOptions: LogOptions = { ...defaultOptions };

const output = (heading: string, text: string) => {
  console.log(chalk.bgRgb(...logOptions.colors)(`@${heading}`), text);
};

export const log = (heading: string, text: string): void => {
  if (logOptions.logLevel === 'all') {
    output(heading, text);
  }
};
export const error = (heading: string, text: string): void => {
  if (logOptions.logLevel !== 'none') {
    output(heading, text);
  }
};

export const setLogOptions = (options: Partial<LogOptions> = {}): void => {
  logOptions = { ...logOptions, ...options };
};
