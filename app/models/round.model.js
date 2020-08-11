module.exports = (sequelize, Sequelize) => {
  const Round = sequelize.define("round", {
    winner: {
      type: Sequelize.STRING
    }
  });

  return Round;
};

