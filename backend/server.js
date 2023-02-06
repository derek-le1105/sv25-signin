require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const loginRoutes = require("./routes/logins.js");

mongoose.set("strictQuery", true);

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/logins", loginRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.error(err);
  });
