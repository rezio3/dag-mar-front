import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Offer from "../pages/Offer";
import Fortranslators from "../pages/Fortranslators";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Policy from "../pages/Policy";
import EditNewsLogin from "../pages/EditNews/EditNewsLogin";
import NewsAdminEdit from "../pages/EditNews/NewsAdminEdit";
import { url } from "../url";

const Page = () => {
  window.onscroll = () => {
    const myNav = document.getElementById("nav");
    const logo = document.getElementById("logo");
    if (window.scrollY > 50 && myNav && logo) {
      myNav.classList.add("nav-scrolled");
      myNav.classList.remove("nav-up");
      logo.classList.add("logo-scrolled");
      logo.classList.remove("logo-up");
    } else if (myNav && logo) {
      myNav.classList.add("nav-up");
      myNav.classList.remove("nav-scrolled");
      logo.classList.add("logo-up");
      logo.classList.remove("logo-scrolled");
    }
  };
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={url.offer} element={<Offer />} />
          <Route path={url.forTranslators} element={<Fortranslators />} />
          <Route path={url.faq} element={<Faq />} />
          <Route path={url.contact} element={<Contact />} />
          <Route path={url.policy} element={<Policy />} />
          <Route
            path="/admin"
            element={
              localStorage.getItem("token") ? (
                <NewsAdminEdit />
              ) : (
                <EditNewsLogin onLogin={() => window.location.reload()} />
              )
            }
          />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default Page;
