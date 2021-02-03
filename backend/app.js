const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

//load view engine
app.set("views", "./src/pages");
app.set("view engine", "ejs");

// method to recognise incoming request objects as strings or arrays. False means cannot post nested object
app.use(express.urlencoded({ extended: false }));

//serving static files
app.use("/static", express.static(path.join(`${__dirname} / public`)));

app.get("/", (req, res) => res.send("Home route"));

const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.DB_HOST, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(port, () =>
      console.log(`Server and DB running on ${port}, http://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
