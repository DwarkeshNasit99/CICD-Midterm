const request = require('supertest');
const app = require('../src/app');

describe('API Integration Tests', () => {
  describe('GET /', () => {
    test('should return welcome message', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Welcome to CI/CD Midterm Application');
    });
  });

  describe('GET /health', () => {
    test('should return health status', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'healthy');
      expect(response.body).toHaveProperty('uptime');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /api/calculator/add', () => {
    test('should add two numbers correctly', async () => {
      const response = await request(app).get('/api/calculator/add?a=5&b=3');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        result: 8,
        operation: 'add',
        a: 5,
        b: 3
      });
    });

    test('should return 400 for missing parameters', async () => {
      const response = await request(app).get('/api/calculator/add?a=5');
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('GET /api/calculator/subtract', () => {
    test('should subtract two numbers correctly', async () => {
      const response = await request(app).get('/api/calculator/subtract?a=5&b=3');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        result: 2,
        operation: 'subtract',
        a: 5,
        b: 3
      });
    });
  });

  describe('GET /api/string/reverse', () => {
    test('should reverse a string correctly', async () => {
      const response = await request(app).get('/api/string/reverse?text=hello');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        result: 'olleh',
        original: 'hello',
        operation: 'reverse'
      });
    });

    test('should return 400 for missing text parameter', async () => {
      const response = await request(app).get('/api/string/reverse');
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('GET /api/string/capitalize', () => {
    test('should capitalize first letter correctly', async () => {
      const response = await request(app).get('/api/string/capitalize?text=hello');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        result: 'Hello',
        original: 'hello',
        operation: 'capitalize'
      });
    });
  });

  describe('404 handler', () => {
    test('should return 404 for non-existent routes', async () => {
      const response = await request(app).get('/non-existent');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error', 'Route not found');
    });
  });
}); 