module.exports = (app) => {
  const transactions = require("../controllers/transactions.controller");

  var router = require("express").Router();

  // Create a new transactions
  router.post("/", transactions.create);

  // Retrieve all transactions
  router.get("/", transactions.get);

  // Update a transactions with id
  router.put("/:id", transactions.update);

  // Delete a transactions with id
  router.delete("/:id", transactions.delete);

  app.use("/api/transactions", router);
};
