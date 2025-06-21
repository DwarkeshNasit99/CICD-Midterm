const express = require('express');
const path = require('path');
const { stringUtils } = require('./stringUtils');
const calculator = require('./calculator');
const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the 'public' directory FIRST
app.use(express.static(path.join(__dirname, '../public')));

// Root endpoint for API documentation or welcome message
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the CI/CD Midterm Application API',
    version: '1.0.0',
    links: {
      health: '/health',
      welcome: '/api/welcome',
      calculator: '/api/calculator',
      string: '/api/string',
    }
  });
});

// Welcome endpoint
app.get('/api/welcome', (req, res) => {
  res.json({
    message: 'Welcome to CI/CD Midterm Application',
    version: '1.0.0'
  });
});

// --- Calculator API ---
app.get('/api/calculator/add', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).json({ error: 'Both a and b parameters are required' });
  const result = calculator.add(Number(a), Number(b));
  res.json({ result, operation: 'add', a: Number(a), b: Number(b) });
});

app.get('/api/calculator/subtract', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).json({ error: 'Both a and b parameters are required' });
  const result = calculator.subtract(Number(a), Number(b));
  res.json({ result, operation: 'subtract', a: Number(a), b: Number(b) });
});

// --- String Utils API ---
app.get('/api/string/reverse', (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).json({ error: 'text parameter is required' });
  const result = stringUtils.reverse(text);
  res.json({ result, original: text, operation: 'reverse' });
});

app.get('/api/string/capitalize', (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).json({ error: 'text parameter is required' });
  const result = stringUtils.capitalize(text);
  res.json({ result, original: text, operation: 'capitalize' });
});

app.get('/api/string/vowels', (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).json({ error: 'text parameter is required' });
  const result = stringUtils.countVowels(text);
  res.json({ result, original: text, operation: 'countVowels' });
});

// --- Health Endpoint ---
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// --- Error handler for API routes ---
app.use('/api', (err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// --- 404 handler for API ---
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

// --- Catch-all for client-side routing ---
// This will serve index.html for any other GET request.
// Useful for single-page applications.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Export the app before starting the server
module.exports = app;

// Only start the server if run directly
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
