import { config } from '../../rollup-config';

export default config({
  input: ['./src/index.ts', './src/NotesPage/NotesPage.tsx'],
  output: {
    exports: 'auto',
  },
});
