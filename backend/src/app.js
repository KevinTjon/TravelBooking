const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Sync database
const db = require('./models'); // Make sure this path is correct

db.sequelize.sync()
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

// Mount routes
app.use('/api/users', userRoutes);

module.exports = app;
