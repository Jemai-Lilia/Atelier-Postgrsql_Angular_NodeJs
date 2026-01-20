require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import sequelize
const { sequelize } = require('./models');

// Import routes

const app = express();

// ====== MIDDLEWARES ======
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ====== ROUTES ======
app.get('/', (req, res) => {
  res.send('🚀 API Task Management is running');
});



// ====== SERVER ======
const PORT = process.env.PORT || 5000;

sequelize.authenticate()
  .then(() => {
    console.log('✅ PostgreSQL connecté avec succès');

    app.listen(PORT, () => {
      console.log(`🚀 Serveur lancé sur ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erreur de connexion à PostgreSQL :', err);
  });
