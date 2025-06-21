const express = require('express');
const path = require('path');
const calculator = require('./calculator');
const stringUtils = require('./stringUtils');
const app = express();
const PORT = process.env.PORT || 3001;

// Define the absolute path to the public directory
const publicPath = path.join(__dirname, '..', 'public');

// 1. Serve static files first. This will serve public/index.html for GET /.
app.use(express.static(publicPath));

// 2. Define all specific API routes.
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the CI/CD Midterm Application API',
    version: '1.0.0',
    links: [ { rel: 'health', href: '/health' } ]
  });
});

// THIS ROUTE WAS MISSING FOR THE TEST
app.get('/api/welcome', (req, res) => {
  res.json({ message: 'Welcome to CI/CD Midterm Application' });
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

// 3. API 404 Handler. This MUST come after all other API routes.
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

// 4. SPA Fallback. This MUST come after API routes to avoid catching API 404s.
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'), (err) => {
    if (err) {
      console.error('SPA Fallback Error:', err);
      res.status(500).send('Error serving application.');
    }
  });
});

// 5. Final generic error handler. This is the last safety net.
app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// --- Server Start ---
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = { app, calculator, stringUtils };