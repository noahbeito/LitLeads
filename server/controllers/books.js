require('dotenv').config();
const axios = require('axios');

const URL = 'https://www.googleapis.com/books/v1/volumes?q=';

const getBooks = (req, res) => {
  const { query } = req;
  let searchQuery;
  console.log('QUERY***', query);
  if (query.author === 'unknown') {
    searchQuery = query.title.replace(/ /g, '+');
  }
  if (query.author !== 'unknown') {
    searchQuery = query.author.replace(/ /g, '+');
  }
  axios.get(`${URL}${searchQuery}&key=${process.env.GOOGLE_API_KEY}`)
    .then((response) => {
      let books = response.data.items;
      books = books.filter((book) => book.volumeInfo.language === 'en')
        .map((book) => (
          {
            id: book.id,
            title: book.volumeInfo.title || '',
            authors: book.volumeInfo.authors || [],
            subtitle: book.volumeInfo.subtitle || '',
            publishedDate: book.volumeInfo.publishedDate || '',
            description: book.volumeInfo.description || '',
            images: book.volumeInfo.imageLinks || {},
            previewLink: book.volumeInfo.previewLink || '',
          }
        ));
      res.status(200).send(books);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports = getBooks;
