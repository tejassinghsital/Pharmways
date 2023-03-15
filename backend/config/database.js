//hierarchy of backend functioning is server then app then route and then controller and then model so process start from model then controller and like this
const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDb is connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
