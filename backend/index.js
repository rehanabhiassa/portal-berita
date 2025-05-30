require("dotenv").config();

const express = require("express");

const serverless = require("serverless-http");

const cors = require("cors");

const app = express();

const port = process.env.PORT;

const signupRoute = require("./src/routes/signup.js");

const signinRoute = require("./src/routes/signin.js");

const userRoute = require("./src/routes/user.js");

const newsRoute = require("./src/routes/news.js");

app.use(cors());

app.use(express.json());

app.use("/signup", signupRoute);

app.use("/signin", signinRoute);

app.use("/users", userRoute);

app.use("/news", newsRoute);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

module.exports = app;

module.exports.handle = serverless(app);
