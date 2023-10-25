const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoUrl =
  "mongodb+srv://sangavi:sangavi27!@cluster0.g9heuen.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");
const User = mongoose.model("UserInfo");
app.post("./register", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  try {
    await User.create({
      fname,
      lname,
      email,
      password,
    });
    res.send({ status: "OK" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

// app.use(express.json());
app.listen(5000, () => {
  console.log("Server Started");
});

// app.post("/post", async (req, res) => {
//   console.log(req.body);
//   const { data } = req.body;

//   try {
//     if (data == "name") {
//       res.send({ status: "ok" });
//     } else {
//       res.send({ status: "User Not Found" });
//     }
//   } catch (error) {
//     res.send({ status: "Something went wrong try again" });
//   }
// });

// require("./userDetails");
// const User = mongoose.model("UserInfo");
// app.post("/register", async (req, res) => {
//   const { name, email, mobileNo } = req.body;
//   try {
//     await User.create({
//       uname: name,
//       email,
//       phoneNo: mobileNo,
//     });
//     res.send({ status: "OK" });
//   } catch (error) {
//     res.send({ status: "error" });
//   }
// });
