const sql = require("../config/db.js");

const getUser = async (req, res) => {
  const datas = await sql`SELECT * FROM users`;

  res.json({
    message: "User sended to frontend",
    data: datas,
  });
};

module.exports = getUser;
