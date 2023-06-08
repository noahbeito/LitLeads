const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  source: String,
  philosophy: String,
  quote: String,
  _id: String,
});

const Quote = mongoose.model('Quote', quoteSchema);

const getAll = () => Quote.find({});

const saveQuote = (quote) => {
  const filter = { quote: quote.quote };
  const update = {
    quote: quote.quote,
    source: quote.author || 'unknown',
    philosophy: quote.philosophy,
    _id: quote.quoteLink,
  };
  return Quote.findOneAndUpdate(filter, update, { new: true, upsert: true });
};

module.exports = { Quote, getAll, saveQuote };
