const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  source: String,
  philosophy: String,
  quote: String,
  _id: String,
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
