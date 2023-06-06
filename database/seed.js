const axios = require('axios');
const Quote = require('./models/quotes');
// eslint-disable-next-line no-unused-vars
const db = require('./index');

// Retrieve data from Philosophy Quotes API and seed the database
axios.get('https://philosophy-quotes-api.glitch.me/quotes')
  .then((response) => {
    Quote.create(response.data);
  })
  .then(() => {
    console.log('seeded db!');
  })
  .catch((err) => {
    console.log(err);
  });

// Run this command in the mongosh CLI to update
// db.quotes.updateMany( {}, { $rename: { "source": "author" } } );
