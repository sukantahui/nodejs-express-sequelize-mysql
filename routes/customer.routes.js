



module.exports = app => {
    const customer = require("../controllers/customer.controller");
    var router = require("express").Router();
    // Seeding Customers
  
    router.post("/seed", customer.seed);
    router.post("/", customer.create);
    router.get("/", customer.findAll);
    router.get("/opBalances/:start/:end", customer.openingBalanceBetween);
    router.get("/:id", customer.findOne);
    router.put("/:id", customer.update);
    router.delete("/:id", customer.delete);

    router.get("/special/witthOrder", customer.withOrder);

    app.use('/api/customers', router);
  };