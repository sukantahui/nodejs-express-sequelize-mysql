const db =require("../models");
const Customer = db.customers;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Tutorial
    const customer = {
      name: req.body.name,
      email: req.body.email
    };
    // Save Tutorial in the database
    Customer.create(customer)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      });
  };

  