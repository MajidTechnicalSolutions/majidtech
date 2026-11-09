const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

module.exports = {
  db: process.env.DB_CONNECTION,
  port: process.env.PORT,
  // The Unsplash access key for /images (the variable keeps its old name so
  // Heroku's config doesn't need changing).
  secret: process.env.SECRET_OR_KEY,
};
