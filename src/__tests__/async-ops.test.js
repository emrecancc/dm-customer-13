import { batchProcess } from '../src/batchProcess';

describe('batch processing', () => {
  it('processes all items', async () => {
    const results = [];
    const items = Array.from({ length: 10 }, (_, i) => i);
    const promises = items.map(item =>
      batchProcess(item).then(res => results.push(res))
    );
    await Promise.all(promises);
    expect(results).toHaveLength(10);
  });
});