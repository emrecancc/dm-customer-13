import request from 'supertest';
import app from '../src/app';

const server = app.listen(3099);

describe('Server', () => {
  it('responds to GET /', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});

afterAll(() => server.close());