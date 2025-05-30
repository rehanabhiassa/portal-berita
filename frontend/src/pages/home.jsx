import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/fragments/Header";
import NewsCard from "../components/fragments/NewsCard";

import FormInput from "../components/elements/input";
import Button from "../components/elements/button";

const HomePage = () => {
  const [news, setNews] = useState([]);

  const id = localStorage.getItem("id");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:9000/news");
      setNews(response.data.data.reverse());
    };

    fetchData();
  }, [news]);

  const handleCreateNews = async (e) => {
    e.preventDefault();

    const news = e.target.news.value;

    const response = await axios.post("http://localhost:9000/news", {
      news,
      user_id: id,
    });

    e.target.news.value = "";
  };
  return (
    <>
      <Header
        title="Portal Berita"
        description="Lihat berita secara realtime."
      />
      <main className="flex flex-col justify-center items-center gap-10 mt-10 mb-24">
        {news.length < 1
          ? "Tidak ada berita"
          : news.map((news, index) => (
              <NewsCard
                key={index}
                profileImage={news.name[0]}
                name={news.name}
                username={news.username}
                news={news.news}
                time={news.created_at}
              />
            ))}
        <form
          onSubmit={handleCreateNews}
          className="fixed bottom-5 flex justify-center items-center gap-5"
        >
          <FormInput type="text" name="news" placeholder="Tulis berita..." />
          <Button width="w-10">
            <i className="bi bi-send"></i>
          </Button>
        </form>
      </main>
    </>
  );
};

export default HomePage;
