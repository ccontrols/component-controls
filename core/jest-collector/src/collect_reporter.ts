import { Reporter, Context } from '@jest/reporters';
import { AggregatedResult } from '@jest/test-result';

export default class CustomReporter implements Pick<Reporter, 'onRunComplete'> {
  async onRunComplete(
    _: Set<Context>,
    results: AggregatedResult,
  ): Promise<void> {
    console.log('data:', JSON.stringify(results.testResults, null, 2));
  }
}
