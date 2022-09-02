module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("order", {
        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        total: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return Customer;
  };