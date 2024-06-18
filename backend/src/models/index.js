// backend/src/models/index.js
const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models and define associations
db.User = require('./user')(sequelize, Sequelize);

module.exports = db;
