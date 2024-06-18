const express = require('express');
const app = express();
const db = require('./models');

// Sync database
db.sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Error syncing database:', err);
});

app.use(express.json());

// Define routes
app.get('/users', async (req, res) => {
  const users = await db.User.findAll();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const user = await db.User.create(req.body);
  res.json(user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
