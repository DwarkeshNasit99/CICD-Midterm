const request = require('supertest');
const { app } = require('../src/app');

describe('API Integration Tests', () => {
  describe('GET /', () => {
    test('should return welcome message', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain('CI/CD Midterm Application');
    });
  });

  describe('GET /health', () => {
    test('should return health status', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'healthy');
      expect(response.body).toHaveProperty('uptime');
    });
  });

  describe('GET /api/calculator/add', () => {
    test('should add two numbers correctly', async () => {
      const response = await request(app)
        .get('/api/calculator/add')
        .query({ a: 5, b: 3 });
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('result', 8);
      expect(response.body).toHaveProperty('operation', 'add');
    });

    test('should return 400 for missing parameters', async () => {
      const response = await request(app)
        .get('/api/calculator/add')
        .query({ a: 5 });
      
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('GET /api/calculator/subtract', () => {
    test('should subtract two numbers correctly', async () => {
      const response = await request(app)
        .get('/api/calculator/subtract')
        .query({ a: 5, b: 3 });
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('result', 2);
      expect(response.body).toHaveProperty('operation', 'subtract');
    });
  });

  describe('GET /api/string/reverse', () => {
    test('should reverse a string correctly', async () => {
      const response = await request(app)
        .get('/api/string/reverse')
        .query({ text: 'hello' });
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('result', 'olleh');
      expect(response.body).toHaveProperty('operation', 'reverse');
    });

    test('should return 400 for missing text parameter', async () => {
      const response = await request(app)
        .get('/api/string/reverse');
      
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('GET /api/string/capitalize', () => {
    test('should capitalize first letter correctly', async () => {
      const response = await request(app)
        .get('/api/string/capitalize')
        .query({ text: 'hello' });
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('result', 'Hello');
      expect(response.body).toHaveProperty('operation', 'capitalize');
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