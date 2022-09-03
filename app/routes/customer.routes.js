



module.exports = app => {
    const customers = require("../controllers/customer.controller");
    var router = require("express").Router();
    // Seeding Customers
    router.get("/seeds", customers.seed);
    // Create a new Tutorial
    router.post("/", customers.create);
    // Retrieve all Tutorials
    router.get("/", customers.findAll);
    // // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
    // // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
    // // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    app.use('/api/customers', router);
  };