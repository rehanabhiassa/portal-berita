const sql = require("../config/db.js");

const signupController = async (req, res) => {
  const { name, username, email, password } = req.body;

  await sql`INSERT INTO users (username, email, password, name) VALUES (${username}, ${email}, ${password}, ${name})`;

  res.json({
    message: "Signup success!",
  });
};

module.exports = signupController;
