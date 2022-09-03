module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
        id: {
            type: Sequelize.BIGINT.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        opening_balance: {
            type: Sequelize.BIGINT,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Customer;
  };