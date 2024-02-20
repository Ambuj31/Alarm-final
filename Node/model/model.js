// model.js
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Alarm', 'gauri', '12345', {
  host: 'localhost',
  dialect: 'postgres'
});

const Alarm = sequelize.define('Alarmdetails', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  status: {
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.STRING
  },
  level: {
    type: DataTypes.STRING
  },
  project: {
    type: DataTypes.STRING
  },
  sprovider: {
    type: DataTypes.STRING
  },
  depth: {
    type: DataTypes.STRING
  },
  indepth: {
    type: DataTypes.STRING
  },
  systatus: {
    type: DataTypes.STRING
  } 
  , well: {
    type: DataTypes.STRING
  },
  phase: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
  }
}
, {
    timestamps: false // Disable timestamps
  });

sequelize.sync();

module.exports = { Alarm };
