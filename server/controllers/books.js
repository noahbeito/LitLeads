require('dotenv').config();
const axios = require('axios');

const URL = 'https://www.googleapis.com/books/v1/volumes?q=';

// send request to google books api
// handle data and return to user;
const getBooks = (req, res) => {
  const { query } = req;

  const searchQuery = query.author.replace(/ /g, '+');

  console.log('SEARCH URL: ', `${URL}${searchQuery}&key=${process.env.GOOGLE_API_KEY}`);
  axios.get(`${URL}${searchQuery}&key=${process.env.GOOGLE_API_KEY}`)
    .then((response) => {
      let books = response.data.items;
      books = books.map((book) => (
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
      console.log('***BOOKS: ', books);
      res.status(200).send(books);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports = getBooks;
