const CustomerService = require("../services/customer-service");

module.exports = (app) => {
  const service = new CustomerService();
  
  app.use("/app-events", (req, res, next) => {
    try {
      const { payload } = req.body;
      service.SubscribeEvents(payload);
      console.log("----------------Recieved Shopping Event-------------------");
      return res.json({ payload });
    } catch (error) {
      console.log(error)
    }
  });
};
