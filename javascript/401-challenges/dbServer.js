'use strict';

const DATABASE_URL='sqlite:memory:';

const carsModel = sequelize.define('Cars', {
  make: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: true
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(DATABASE_URL);

const CarTable = carsModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  cars: CarTable
};
