const express = require('express');
const path = require('path');
const calculator = require('./calculator');
const stringUtils = require('./stringUtils');
const app = express();
const PORT = process.env.PORT || 3001;

// Define an absolute path to the public directory from the project root
const publicPath = path.join(__dirname, '..', 'public');

// --- Middleware ---
// 1. Serve static files from the 'public' directory.
// This is the first thing the server does. It will automatically handle GET '/'
// by serving public/index.html if it exists.
app.use(express.static(publicPath));

// --- API Routes ---
// All your API endpoints go here.

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the CI/CD Midterm Application API',
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

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

// --- SPA Fallback ---
// This must come AFTER static middleware and all API routes.
// It sends index.html for any GET request that doesn't match an API route or a static file.
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});


// --- Final Error Handlers ---
// These are placed last to catch any errors from the above routes.
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});


// --- Server Start ---
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = { app, calculator, stringUtils };