require('dotenv').config();
const path = require('path');

const express = require('express');
const morgan = require('morgan');
const getQuotes = require('../database/controllers/quotes');

const app = express();
app.use(morgan('dev'));
const db = require('../database/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/quotes', getQuotes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server available at http://localhost:${PORT}`);
});
