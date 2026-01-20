const express = require('express');
const pool = require('./config/db');

const app = express();
app.use(express.json());

app.get('/test-db', async (req, res) => {
 res.send('Hello Lilia ..!')
});

app.listen(process.env.PORT, () => {
  console.log('🚀 Serveur lancé sur ', process.env.PORT);
});
