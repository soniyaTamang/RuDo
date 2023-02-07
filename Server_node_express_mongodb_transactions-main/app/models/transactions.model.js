module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    userid: Number,
    transactionid: Number,
    amount: Number,
  });
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Transactions = mongoose.model("transactions", schema);
  return Transactions;
};
