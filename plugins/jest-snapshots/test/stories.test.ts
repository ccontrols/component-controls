import path from 'path';
import { render } from '../react';
import { runJestSnapshots } from '../dist/index';

runJestSnapshots(render, { configPath: path.resolve(__dirname, './.config') });
