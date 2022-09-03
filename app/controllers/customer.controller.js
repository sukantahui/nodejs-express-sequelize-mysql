const db =require("../models");
const Customer = db.customers;
const Op = db.Sequelize.Op;


exports.seed = (req, res) => {
    // Create a Tutorial
  
    
    Customer.bulkCreate([
        {name: "Sukanta Hui",opening_balance: 5000, email: "sukantahui@gmail.com"},
        {name: "Tanusree Hui",opening_balance: 5000, email: "tanusreehui@gmail.com"},
        {name: "Riddhiman Hui",opening_balance: 5000, email: "riddhimanhui@gmail.com"},
        {name: "Ritaja Ghosh",opening_balance: 5000, email: "Ritaja Ghsoh@gmail.com"},
        {name: "Sreeparna Das",opening_balance: 5000, email: "sreeparnadas@gmail.com"},
        {name: "Priyam Sandhukhan",opening_balance: 5000, email: "priyam Sandhukhan@gmail.com"},
        {name: "Sumit Das",opening_balance: 5000, email: "sumitdas@gmail.com"},
        {name: "Riya Roy",opening_balance: 5000, email: "riyaroy@gmail.com"}
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
      email: req.body.email,
      opening_balance: req.body.opening_balance
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
    // console.log("Request is: ",req);

    const openingBalance = req.query.openingBalance;
    var condition = openingBalance ? { opening_balance: { [Op.eq]: `${openingBalance}` } } : null;
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

  exports.openingBalanceBetween = (req, res) => {
    // console.log("Request is: ",req);
    const opBalanceStart = req.params.start;
    const opBalanceEnd = req.params.end;
    var condition = opBalanceStart ? { opening_balance: { [Op.gte]: `${opBalanceStart}` } } : null;
    Customer.findAll({ 
      where: {
        [Op.and]: [{
                opening_balance: {
                    [Op.gte]: `${opBalanceStart}`
                }
            },
            {
              opening_balance: {
                    [Op.lte]: `${opBalanceEnd}`
                }
            }
        ]
    }
     })
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


  