const db = require("../models");
const Round = db.rounds;
const Op = db.Sequelize.Op;

// Create and Save a new Round
exports.create = (req, res) => {

  // Create a round
  const round = {
    winner: req.body.winner,
  };

  // Save Round in the database
  Round.create(round)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while creating the Round."
      });
    });
};

// Retrieve all Rounds from the database.
exports.findAll = (req, res) => {
  const winner = req.query.winner;
  var condition = winner ? { winner: { [Op.iLike]: `%${winner}%` } } : null;

  Round.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving rounds."
      });
    });
};

// Retrieve last Round from the database.
exports.findLast = (req, res) => {
  Round.findAll({
    limit: 1,
    where: {},
    order: [['createdAt', 'DESC']]
  }).then(data => {
    res.send(data);
  });
};

// Find a single Round with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Round.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving round with id=" + id
      });
    });

};

// Update a Round by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Round.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Round was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update round with id=${id}. Maybe round was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating round with id=" + id
      });
    });
};

