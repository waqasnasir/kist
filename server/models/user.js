'use strict';
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.TEXT
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'inactive'
    },
    temp_token: {
      type:Sequelize.STRING
    }
  })

  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};