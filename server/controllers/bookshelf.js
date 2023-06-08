const { putOnShelf, getShelf } = require('../../database/models/book');

const getBookshelf = (req, res) => {
  getShelf()
    .then((response) => res.status(200).send(response))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const putShelf = (req, res) => {
  putOnShelf(req.body)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports = { getBookshelf, putShelf };
