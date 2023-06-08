const axios = require('axios');
const { saveQuote } = require('../../database/models/quotes');

const URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';

const getMoreQuotes = (req, res) => {
  axios.get(URL)
    .then((response) => {
      const quote = {
        author: response.data.quoteAuthor,
        quote: response.data.quoteText,
        philosophy: 'n/a',
        quoteLink: response.data.quoteLink,
      };
      return saveQuote(quote);
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports = getMoreQuotes;
