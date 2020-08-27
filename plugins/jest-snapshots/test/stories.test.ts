import { renderers } from '../src/renderers';
import { runJestSnapshots } from '../dist/index';
runJestSnapshots(renderers.enzyme);
runJestSnapshots(renderers.react);
