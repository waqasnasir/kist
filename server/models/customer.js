'use strict';
module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define('Customer', {
    name: {
      type: Sequelize.STRING
    },
    cnic: {
      type: Sequelize.STRING,
      unique:true
    },
    phone: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    owner_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id"
      }
    },
  });
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.belongsTo(models.User, {foreignKey: 'owner_id'}); 
    
  };
  return Customer;
};