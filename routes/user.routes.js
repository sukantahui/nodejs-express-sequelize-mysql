



module.exports = app => {
    const users = require("../controllers/user.controller");
    var router = require("express").Router();
    // Seeding Customers
  
    router.post("/seed", users.seed);

  
    app.use('/api/users', router);
  };