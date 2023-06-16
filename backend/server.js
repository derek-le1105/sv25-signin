require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const entriesRoutes = require("./routes/entries");
const studentsRoutes = require("./routes/student");
const adminRoutes = require("./routes/admin");

mongoose.set("strictQuery", true);

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/entries", entriesRoutes);
app.use("/api/student", studentsRoutes);
app.use("/api/admin", adminRoutes);

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

/*mongoose
  .connect("mongodb://mongo_database:27017/pcc_data")
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.error(err);
  });*/
