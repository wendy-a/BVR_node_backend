const BvsRecordController = require("../controller/bvsRecordController")

module.exports = (app) => {
  app.post("/api/BuyVsRent/record/new", BvsRecordController.createRecord);
  app.put("/api/BuyVsRent/record/update/:id", BvsRecordController.updateRecord);
  app.get("/api/BuyVsRent/record/:id", BvsRecordController.getRecordDetail);
  app.get("/api/BuyVsRent/user/:email", BvsRecordController.getUserHistory);
  app.get("/", (req, res) => {res.send('hello world')});
}
