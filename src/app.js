const express = require('express');
const path = require('path');
const calculator = require('./calculator');
const stringUtils = require('./stringUtils');
const app = express();
const PORT = process.env.PORT || 3001;

// Define the absolute path to the public directory
const publicPath = path.join(__dirname, '..', 'public');

// --- Middleware: Serve Static Files ---
// This is first. It automatically serves index.html for GET / and other static assets.
app.use(express.static(publicPath));

// --- API Routes ---
// All your API endpoints are defined here.
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the CI/CD Midterm Application API',
    version: '1.0.0',
    links: [ { rel: 'health', href: '/health' } ]
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

app.get('/api/calculator/add', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).json({ error: 'Both a and b parameters are required' });
  res.json({ result: calculator.add(Number(a), Number(b)) });
});

app.get('/api/calculator/subtract', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).json({ error: 'Both a and b parameters are required' });
  res.json({ result: calculator.subtract(Number(a), Number(b)) });
});

app.get('/api/string/reverse', (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).json({ error: 'text parameter is required' });
  res.json({ result: stringUtils.reverse(text) });
});

app.get('/api/string/capitalize', (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).json({ error: 'text parameter is required' });
  res.json({ result: stringUtils.capitalize(text) });
});

app.get('/api/string/vowels', (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).json({ error: 'text parameter is required' });
  res.json({ result: stringUtils.countVowels(text) });
});

// --- SPA Fallback ---
// This must come after static middleware and all API routes.
// It sends index.html for any GET request that doesn't match a known API or static file.
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// --- Final Error Handlers ---
// These are placed last to catch any requests that have fallen through.
app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// --- Server Start ---
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = { app, calculator, stringUtils };