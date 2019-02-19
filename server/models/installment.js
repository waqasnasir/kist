'use strict';
module.exports = (sequelize, DataTypes) => {
  const Installment = sequelize.define('Installment', {
    amount: DataTypes.DECIMAL,
    deal_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    paid_at: DataTypes.DATEONLY
  }, {});
  Installment.associate = function(models) {
    // associations can be defined here
    Installment.belongsTo(models.Deal, {foreignKey: 'deal_id'}); 
    Installment.belongsTo(models.Customer, {foreignKey: 'customer_id'}); 
    
  };
  return Installment;
};