const { fakeDatabase } = require('../database/fakeDatabase');

// Retrieve all Phones from the database.
exports.findAll = (req, res) => {
  fakeDatabase.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving phones."
      });
    });
};