const db =require("../models");
const Op = db.Sequelize.Op;

exports.seed = (req, res) => {
  // Create a Tutorial

  
  db.Customer.bulkCreate([
      {customerName: "Sukanta Hui",openingBalance: 45, email: "sukanta@gmail.com"},
      {customerName: "Tanusree Hui",openingBalanceopeningBalance: 41, email: "tanusree@gmail.com"},
      {customerName: "Riddhiman Hui",openingBalance: 11, email: "riddhiman@gmail.com"},
      {customerName: "Ritaja Ghosh",openingBalance: 22, email: "ritaja@gmail.com"},
      {customerName: "Sreeparna Das",openingBalance: 28, email: "sreeparnadas@gmail.com"},
      {customerName: "Priyam Sandhukhan",openingBalance: 23, email: "priyam@gmail.com"},
      {customerName: "Sumit Das",openingBalance: 26, email: "sumit@gmail.com"},
      {customerName: "Riya Roy",openingBalance: 22, email: "riya@gmail.com"}
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
  if (!req.body.customerName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Tutorial
  const customer = {
    customerName: req.body.customerName,
    email: req.body.email,
    openingBalance: req.body.openingBalance
  };
  // Save Tutorial in the database
  db.Customer.create(customer)
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

exports.findAll = (req, res) => {
  // console.log("Request is: ",req);
  const openingBalance = req.query.openingBalance;
  var condition = openingBalance ? { openingBalance: { [Op.eq]: `${openingBalance}` } } : null;
  db.Customer.findAll({ where: condition })
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
  var condition = opBalanceStart ? { openingBalance: { [Op.gte]: `${opBalanceStart}` } } : null;
  db.Customer.findAll({ 
    where: {
      [Op.and]: [{
            openingBalance: {
                  [Op.gte]: `${opBalanceStart}`
              }
          },
          {
            openingBalance: {
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

exports.findOne = (req, res) => {
  const id = req.params.id;
  db.Customer.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Customer with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Customer with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  db.Customer.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        db.Customer.findByPk(id)
        .then(data=>{
          res.send({data: data, message: "record Updated"});
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Customer with id=" + id
          });
        });
        // res.send({
        //   message: "Customer was updated successfully."
        // });
      } else {
        res.send({
          message: `Cannot update Customer with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Customer with id=" + id
      });
    });
};

 exports.delete =async (req, res) => {
  const id = req.params.id;
  const customer =await db.Customer.findByPk(id);
  db.Customer.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({customer: customer,
          message: "Customer was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Customer with id=" + id
      });
    });
};

  