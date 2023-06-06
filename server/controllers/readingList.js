const { getList, addToList } = require('../../database/models/readingList');

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

module.exports = { getReadingList, saveToList };
