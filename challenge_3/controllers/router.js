var db = require('./db.js');

module.exports.create = (req, res) => {
  db.create()
  .then(() => {
    res.status(201).end();
  })
  .catch((err) => {
    console.log('issues talking to database');
    res.status(400).end();
  })
}

module.exports.read = (req, res) => {
  db.read()
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    console.log('issues talking to database');
    res.status(400).end();
  })
}