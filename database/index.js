const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/books');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;
