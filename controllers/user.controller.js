const db =require("../models");
const Op = db.Sequelize.Op;

exports.seed = (req, res) => {
  // Create a Tutorial

  
  db.User.bulkCreate([
      {firstName: "Sukanta Hui",age: 45},
      {firstName: "Tanusree Hui",age: 41},
      {firstName: "Riddhiman Hui",age: 11},
      {firstName: "Ritaja Ghosh",age: 22},
      {firstName: "Sreeparna Das",age: 28},
      {firstName: "Priyam Sandhukhan",age: 23},
      {firstName: "Sumit Das",age: 26},
      {firstName: "Riya Roy",age: 22}
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




  