const db = require("../models");
const Transactions = db.transactions;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Create a Transactions
  const tutorial = new Transactions({
    userid: req.body.userid,
    transactionid: req.body.transactionid,
    amount: req.body.amount,
  });

  // Save Transactions in the database
  transactions
    .save(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Transactions.",
      });
    });
};

// Retrieve all Transactions from the database.
exports.get = (req, res) => {
  console.log('test');
  Transactions.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving transactions.",
      });
    });
};

// Update a Transactions by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Transactions.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Transactions with id=${id}. Maybe Transactions was not found!`,
        });
      } else res.send({ message: "Transcations was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Transactions with id=" + id,
      });
    });
};

// Delete a Transactions with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Transactions.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Transactions with id=${id}. Maybe Transactions was not found!`,
        });
      } else {
        res.send({
          message: "Transactions was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Transactions with id=" + id,
      });
    });
};
