import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./layouts/ScrollToTop";
import Navbar from "./layouts/Navbar";
import Page from "./layouts/Page";
import Footer from "./layouts/Footer";
import MenuInBurgerIcon from "./layouts/MenuInBurgerIcon";
import NewsWindow from "./layouts/NewsWindow";
import { baseUrl } from "./baseUrl";

function App() {
  const [burgerActive, setBurgerActive] = useState(false);
  const [news, setNews] = useState<News>({
    txt1: "",
    txt2: "",
    newsOn: false,
  });
  const handleCloseButton = () => {
    setNews({
      ...news,
      newsOn: !news.newsOn,
    });
  };
  useEffect(() => {
    fetch(`${baseUrl}get-news`)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error("Błąd:", err));
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          {!burgerActive ? (
            <div className="App">
              <Navbar
                burgerActive={burgerActive}
                setBurgerActive={setBurgerActive}
              />
              <Page />
              {news.newsOn && (
                <NewsWindow close={handleCloseButton} news={news} />
              )}

              <Footer />
            </div>
          ) : (
            <MenuInBurgerIcon
              burgerActive={burgerActive}
              setBurgerActive={setBurgerActive}
            />
          )}
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;

export type News = { txt1: string; txt2: string; newsOn: boolean };
