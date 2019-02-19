'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deal = sequelize.define('Deal', {
    item: DataTypes.STRING,
    item_description: DataTypes.TEXT,
    item_price: DataTypes.DECIMAL,
    total_price: DataTypes.DECIMAL,
    monthly_installment: DataTypes.DECIMAL,
    advance: DataTypes.DECIMAL,
    gaurantor_name: DataTypes.STRING,
    gaurantor_mbl: DataTypes.STRING,
    gaurantor_address: DataTypes.STRING,
    customer_id: DataTypes.INTEGER,
    owner_id: DataTypes.INTEGER
  }, {});
  Deal.associate = function(models) {
    // associations can be defined here
  };
  return Deal;
};