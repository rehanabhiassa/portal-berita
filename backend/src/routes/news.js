const express = require("express");

const router = express.Router();

const newsController = require("../controllers/news.js");

router.post("/", newsController.createNews);

router.get("/", newsController.getNews);

router.delete("/", newsController.deleteNews);

module.exports = router;
