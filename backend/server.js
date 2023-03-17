const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down Server due to Uncaught Exception error`);
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });

//connecting to database means calling connectDatabase function but here after config cos if not then it can't get the DB_URI
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise rejection error-> means when the Db_URI string in config.env is wrong
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down Server due to Unhandled Promise Rejeaction error`);
  server.close(() => {
    process.exit(1);
  });
});
