module.exports = (sequelize, Sequelize) => {
  const Move = sequelize.define("move", {
    round_id: {
      type: Sequelize.INTEGER
    },
    position: {
      type: Sequelize.STRING
    },
    player: {
      type: Sequelize.STRING
    }
  });

  return Move;
};

