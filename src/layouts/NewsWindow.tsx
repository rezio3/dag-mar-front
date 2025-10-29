import "../style/newsWindow.scss";
import type { News } from "../App";

type NewsWindowProps = {
  close: () => void;
  news: News;
};

const NewsWindow: React.FC<NewsWindowProps> = ({ close, news }) => {
  return (
    <div className="news-container">
      <div className="news-x-btn" onClick={close} />
      <h4>Szanowni Klienci,</h4>
      <p>{news.txt1}</p>
      <p>{news.txt2}</p>
      <button className="news-ok-btn" onClick={close}>
        Ok
      </button>
    </div>
  );
};

export default NewsWindow;
