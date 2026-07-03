const request = require('supertest');
const app = require('../app');

test('API responds within 600ms', async () => {
  const start = Date.now();
  await request(app).get('/');
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(600);
});