import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import "../style/newsWindow.scss";

const NewsWindow = () => {
  const [news, setNews] = useContext(NewsContext);
  const handleCloseButton = () => {
    setNews({
      ...news,
      newsOn: false,
    });
  };

  return (
    <div className="news-container">
      <div className="news-x-btn" onClick={handleCloseButton} />
      <h4>Szanowni Klienci,</h4>
      <p>{news.txt1}</p>
      <p>{news.txt2}</p>
      <button className="news-ok-btn" onClick={handleCloseButton}>
        Ok
      </button>
    </div>
  );
};

export default NewsWindow;
