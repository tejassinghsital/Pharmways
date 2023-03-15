const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//config
dotenv.config({ path: "backend/config/config.env" });

//connecting to database means calling connectDatabase function but here after config cos if not then it can't get the DB_URI
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
