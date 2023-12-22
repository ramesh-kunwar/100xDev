const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose
  .connect(
    "mongodb+srv://ramesh:ramesh@cluster0.jm6vyov.mongodb.net/assignmentMongo"
  )
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
