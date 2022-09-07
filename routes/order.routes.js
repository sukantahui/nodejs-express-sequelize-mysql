



module.exports = app => {
    const order = require("../controllers/order.controller");
    var router = require("express").Router();
    // Seeding orders
    router.post("/seed", order.seed);
    // router.post("/", order.create);
    router.get("/", order.findAll);
    // router.get("/opBalances/:start/:end", order.openingBalanceBetween);
    // router.get("/:id", order.findOne);
    // router.put("/:id", order.update);
    // router.delete("/:id", order.delete);

    
    app.use('/api/orders', router);
  };