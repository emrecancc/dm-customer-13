const server = require('../src/server');
const request = require('supertest');

beforeAll(() => {
  server.listen(3119);
});

test('GET /', async () => {
  const res = await request(server).get('/');
  expect(res.status).toBe(200);
});

afterAll(() => {
  server.close();
});