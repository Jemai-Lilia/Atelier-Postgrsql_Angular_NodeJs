const express = require('express');
const pool = require('./config/db');

const app = express();
app.use(express.json());

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log('🚀 Serveur lancé sur http://localhost:5000');
});
