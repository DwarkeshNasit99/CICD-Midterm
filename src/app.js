const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../public')));

// --- Calculator API ---
app.get('/api/calculator/add', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).json({ error: 'Both a and b parameters are required' });
  const result = Number(a) + Number(b);
  res.json({ result, operation: 'add', a: Number(a), b: Number(b) });
});

app.get('/api/calculator/subtract', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).json({ error: 'Both a and b parameters are required' });
  const result = Number(a) - Number(b);
  res.json({ result, operation: 'subtract', a: Number(a), b: Number(b) });
});

// --- String Utils API ---
app.get('/api/string/reverse', (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).json({ error: 'text parameter is required' });
  const result = text.split('').reverse().join('');
  res.json({ result, original: text, operation: 'reverse' });
});

app.get('/api/string/capitalize', (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).json({ error: 'text parameter is required' });
  const result = text.charAt(0).toUpperCase() + text.slice(1);
  res.json({ result, original: text, operation: 'capitalize' });
});

// --- Health Endpoint ---
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// --- Error handler for API routes only ---
app.use('/api', (err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// --- 404 for API routes only ---
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});