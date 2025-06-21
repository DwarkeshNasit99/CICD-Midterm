const request = require('supertest');
const { app } = require('../src/app');

describe('API Integration Tests', () => {
  describe('GET /api/welcome', () => {
    it('should return welcome message', async () => {
      const res = await request(app).get('/api/welcome');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Welcome to CI/CD Midterm Application');
    });
  });

  describe('GET /api', () => {
    it('should return API welcome message and links', async () => {
      const res = await request(app).get('/api');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Welcome to the CI/CD Midterm Application API');
      expect(res.body).toHaveProperty('links');
    });
  });

  describe('GET /', () => {
    it('should return HTML content', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toEqual(200);
      expect(res.header['content-type']).toMatch(/html/);
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const res = await request(app).get('/health');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('status', 'healthy');
    });
  });

  describe('GET /api/calculator/add', () => {
    it('should add two numbers correctly', async () => {
      const res = await request(app).get('/api/calculator/add?a=5&b=3');
      expect(res.statusCode).toEqual(200);
      expect(res.body.result).toEqual(8);
    });

    it('should return 400 for missing parameters', async () => {
      const res = await request(app).get('/api/calculator/add?a=5');
      expect(res.statusCode).toEqual(400);
    });
  });

  describe('GET /api/calculator/subtract', () => {
    it('should subtract two numbers correctly', async () => {
      const res = await request(app).get('/api/calculator/subtract?a=10&b=4');
      expect(res.statusCode).toEqual(200);
      expect(res.body.result).toEqual(6);
    });
  });

  describe('GET /api/string/reverse', () => {
    it('should reverse a string correctly', async () => {
      const res = await request(app).get('/api/string/reverse?text=hello');
      expect(res.statusCode).toEqual(200);
      expect(res.body.result).toEqual('olleh');
    });

    it('should return 400 for missing text parameter', async () => {
      const res = await request(app).get('/api/string/reverse');
      expect(res.statusCode).toEqual(400);
    });
  });

  describe('GET /api/string/capitalize', () => {
    it('should capitalize first letter correctly', async () => {
      const res = await request(app).get('/api/string/capitalize?text=hello');
      expect(res.statusCode).toEqual(200);
      expect(res.body.result).toEqual('Hello');
    });

    it('should return 400 for missing text parameter', async () => {
      const res = await request(app).get('/api/string/capitalize');
      expect(res.statusCode).toEqual(400);
      expect(res.body.error).toBe('text parameter is required');
    });
  });

  describe('GET /api/string/vowels', () => {
    it('should count vowels in a string correctly', async () => {
      const res = await request(app).get('/api/string/vowels?text=javascript');
      expect(res.statusCode).toEqual(200);
      expect(res.body.result).toEqual(3);
    });

    it('should return 400 for missing text parameter', async () => {
      const res = await request(app).get('/api/string/vowels');
      expect(res.statusCode).toEqual(400);
      expect(res.body.error).toBe('text parameter is required');
    });
  });

  describe('404 handler', () => {
    it('should return 404 for non-existent API routes', async () => {
      const res = await request(app).get('/api/non-existent-route');
      expect(res.statusCode).toEqual(404);
    });

    it('should serve index.html for non-API routes (SPA behavior)', async () => {
      const res = await request(app).get('/some/other/route');
      expect(res.statusCode).toEqual(200);
      expect(res.header['content-type']).toMatch(/html/);
    });
  });
}); 