const express = require("express");
const router  = express.Router();

const rounds = require("../app/controllers/rounds.controller.js");
const moves = require("../app/controllers/moves.controller.js");

router.post("/rounds", rounds.create);
router.get("/rounds", rounds.findAll);
router.get("/rounds/:id", rounds.findOne);
router.put("/rounds/:id", rounds.update);
router.get("/rounds-last", rounds.findLast);
router.get("/rounds/:id/moves", moves.findByRound);

router.post("/moves", moves.create);
router.get("/moves", moves.findAll);

module.exports = router;

