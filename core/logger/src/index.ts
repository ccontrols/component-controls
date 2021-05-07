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

const output = (
  heading: string,
  text: string,
  bgColor?: [number, number, number],
) => {
  console.log(
    chalk.bgRgb(...(bgColor || logOptions.colors))(`@${heading}`),
    text,
  );
};

export const log = (
  heading: string,
  text: string,
  bgColor?: [number, number, number],
): void => {
  if (logOptions.logLevel === 'all') {
    output(heading, text, bgColor);
  }
};
export const error = (
  heading: string,
  text: string,
  bgColor?: [number, number, number],
): void => {
  if (logOptions.logLevel !== 'none') {
    output(heading, text, bgColor);
  }
};

export const setLogOptions = (options: Partial<LogOptions> = {}): void => {
  logOptions = { ...logOptions, ...options };
};
