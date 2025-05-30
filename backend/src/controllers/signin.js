const sql = require("../config/db.js");

const signinController = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  const dataValidation =
    await sql`SELECT * FROM USERS WHERE username = ${username}`;

  if (dataValidation.length == 0) {
    return res.json({
      message: `Nama pengguna ${username} tidak ditemukan.`,
      status: 404,
    });
  } else if (password !== dataValidation[0].password) {
    return res.json({
      message: "Kata sandi salah.",
      status: 401,
    });
  }

  res.json({
    message: "Signin success!",
    data: {
      id: dataValidation[0].id,
      username: dataValidation[0].username,
      name: dataValidation[0].name,
      email: dataValidation[0].email,
    },
  });
};

module.exports = signinController;
