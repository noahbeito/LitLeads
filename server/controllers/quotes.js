const { getAll } = require('../../database/models/quotes');

const getQuotes = (req, res) => {
  getAll()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = getQuotes;
