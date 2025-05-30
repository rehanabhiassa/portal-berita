const sql = require("../config/db.js");

const timeFormat = (time) => {
  const now = new Date(time);

  const date = String(now.getDate()).padStart(2, "0");

  const month = String(now.getMonth() + 1).padStart(2, "0");

  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, "0");

  const minutes = String(now.getMinutes()).padStart(2, "0");

  const seconds = String(now.getSeconds()).padStart(2, "0");

  const Time = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;

  return Time;
};

const createNews = async (req, res) => {
  const { news, user_id } = req.body;

  await sql`INSERT INTO news (news, created_at, user_id) VALUES (${news}, ${timeFormat(
    Date.now()
  )}, ${user_id})`;

  res.json({
    message: "News created!",
  });
};

const getNews = async (req, res) => {
  const datas =
    await sql`SELECT * FROM news LEFT JOIN users ON news.user_id = users.id`;

  res.json({
    message: "News sended!",
    data: datas,
  });
};

const deleteNews = async (req, res) => {
  const id = req.query.id;
  console.log(id);

  await sql`DELETE FROM news WHERE id = ${id}`;

  res.json({
    message: "News deleted!",
  });
};

module.exports = { createNews, getNews, deleteNews };
