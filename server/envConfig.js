const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

module.exports = {
  db: process.env.DB_CONNECTION,
  port: process.env.PORT,
  secret: process.env.SECRET_OR_KEY,
  refreshSecret: process.env.REFRESH_SECRET,
};
