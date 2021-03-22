import { renderers } from '@component-controls/test-renderers';
import { runJestSnapshots } from '../dist/index';

runJestSnapshots(renderers.enzyme);
runJestSnapshots(renderers.react);
