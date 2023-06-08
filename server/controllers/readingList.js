const { getList, addToList, remove } = require('../../database/models/book');

const getReadingList = (req, res) => {
  getList()
    .then((list) => {
      console.log('LIST****', list);
      res.status(200).send(list);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const saveToList = (req, res) => {
  addToList(req.body)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const removeFromList = (req, res) => {
  remove(req.body)
    .then(() => res.sendStatus(204))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

module.exports = { getReadingList, saveToList, removeFromList };
