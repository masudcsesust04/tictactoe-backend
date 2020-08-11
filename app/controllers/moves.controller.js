const db = require("../models");
const Move = db.moves;
const Op = db.Sequelize.Op;

// Create and Save a new Move
exports.create = (req, res) => {
  console.log(req.body);
  // Validate request
  if (!req.body.round_id) {
    res.status(400).send({
      message: "round_id can not be empty!"
    });
    return;
  }
  
  if (!req.body.position) {
    res.status(400).send({
      message: "position can not be empty!"
    });
    return;
  }

  if (!req.body.player) {
    res.status(400).send({
      message: "player can not be empty!"
    });
    return;
  }
  
  // Create a move
  const move = {
    round_id: req.body.round_id,
    position: req.body.position,
    player: req.body.player,
  };

  // Save Move in the database
  Move.create(move)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while creating the Move."
      });
    });
};

// Retrieve all Moves from the database.
exports.findAll = (req, res) => {
  const player = req.query.player;
  var condition = player ? { player: { [Op.iLike]: `%${player}%` } } : null;

  Move.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving moves."
      });
    });
};

// Retrieve Moves by round id from the database.
exports.findByRound = (req, res) => {
  const round_id = req.params.id;

  Move.findAll({ where: { round_id: round_id } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving moves."
      });
    });
};

// Find a single Move with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Move.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving move with id=" + id
      });
    });
};


