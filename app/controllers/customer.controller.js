const db =require("../models");
const Customer = db.customers;
const Op = db.Sequelize.Op;


exports.seed = (req, res) => {
    // Create a Tutorial
  
    
    Customer.bulkCreate([
        {name: "Sukanta Hui", email: "sukantahui@gmail.com"},
        {name: "Tanusree Hui", email: "tanusreehui@gmail.com"},
        {name: "Riddhiman Hui", email: "riddhimanhui@gmail.com"},
        {name: "Ritaja Ghosh", email: "Ritaja Ghsoh@gmail.com"},
        {name: "Sreeparna Das", email: "sreeparnadas@gmail.com"},
        {name: "Priyam Sandhukhan", email: "priyam Sandhukhan@gmail.com"},
        {name: "Sumit Das", email: "sumitdas@gmail.com"},
        {name: "Riya Roy", email: "riyaroy@gmail.com"}
    ]).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Customers."
      });
    });
    
};

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

   //fetching 
   exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Customer.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Customers."
        });
      });
  };


  