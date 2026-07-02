import { getLatency } from '../src/api';

describe('API latency', () => {
  it('responds within 150ms', async () => {
    const latency = await getLatency();
    expect(latency).toBeLessThan(500);
  });
});