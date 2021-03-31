const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

const app = require("./app");

dotenv.config({ path: path.resolve(__dirname, "./server/config.env") });

const db = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);

mongoose
  .connect(db, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then((res) => console.log("Connected to database"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));
