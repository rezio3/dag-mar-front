import React, {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type NewsType = {
  newsOn: boolean;
  txt1: string;
  txt2: string;
};

type NewsContextType = [NewsType, Dispatch<SetStateAction<NewsType>>];

const newsData: NewsType = {
  newsOn: false,
  txt1: "",
  txt2: "",
};

// 🟢 tu typujemy kontekst explicite
export const NewsContext = createContext<NewsContextType>([newsData, () => {}]);

const News = ({ children }: { children: React.ReactNode }) => {
  const [news, setNews] = useState<NewsType>(newsData);

  return (
    <NewsContext.Provider value={[news, setNews]}>
      {children}
    </NewsContext.Provider>
  );
};

export default News;
