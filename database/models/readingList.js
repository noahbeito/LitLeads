const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: String,
  title: String,
  authors: [String],
  images: {
    smallThumbnail: String,
    thumbnail: String,
  },
  subtitle: String,
  publishedDate: String,
  description: String,
  previewLink: String,
  readingList: Boolean,
});

const Book = mongoose.model('Book', bookSchema);

const getList = () => Book.find({
  readingList: true,
});

const addToList = (book) => {
  const filter = { id: book.id };
  const update = {
    title: book.title,
    subtitle: book.subtitle,
    authors: book.authors,
    publishedDate: book.publishedDate,
    description: book.description,
    images: book.images,
    readingList: true,
  };
  return Book.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true,
  });
};

const remove = (book) => Book.deleteOne({ title: book.title });

module.exports = {
  Book, getList, addToList, remove,
};
