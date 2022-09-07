const db =require("../models");
const Op = db.Sequelize.Op;

exports.findAll= (req, res)=>{
  res.send({test: "sdgdsfg"});
};

exports.seed = (req, res) => {
  // Create a Tutorial
  db.Order.bulkCreate([
      {total: 100,CustomerId:1},
      {total: 100,CustomerId:1},
      {total: 100,CustomerId:1},
      {total: 100,CustomerId:1}
      
  ]).then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Order."
    });
  });
  
};

