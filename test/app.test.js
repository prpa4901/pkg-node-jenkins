const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

describe('API Endpoints', () => {
  test('GET /api should return welcome message', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to Node.js DevOps Test App!');
  });

  test('GET /api/health should return UP status', async () => {
    const response = await request.get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('UP');
  });
  
  test('GET / should serve HTML', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('text/html');
  });
});