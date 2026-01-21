const PORT = process.env.PORT || 5000;

const startServer = async () => {
  let connected = false;

  while (!connected) {
    try {
      await sequelize.authenticate();
      connected = true;
      console.log('✅ PostgreSQL connecté avec succès');
    } catch (error) {
      console.error('⏳ PostgreSQL non prêt, nouvelle tentative dans 5s...');
      await new Promise(res => setTimeout(res, 5000));
    }
  }

  app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur le port ${PORT}`);
  });
};

startServer();
