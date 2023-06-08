require('dotenv').config();
const path = require('path');

const express = require('express');
const morgan = require('morgan');
const getQuotes = require('./controllers/quotes');
const getBooks = require('./controllers/books');
const { getReadingList, saveToList, removeFromList } = require('./controllers/readingList');
const getMoreQuotes = require('./controllers/moreQuotes');

const app = express();
app.use(morgan('dev'));
// eslint-disable-next-line no-unused-vars
const db = require('../database/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/quotes', getQuotes);
app.get('/more-quotes', getMoreQuotes);
app.get('/books', getBooks);
app.get('/reading-list', getReadingList);
app.post('/reading-list', saveToList);
app.delete('/reading-list', removeFromList);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost:${PORT}`);
});
