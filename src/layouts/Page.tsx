import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Offer from "../pages/Offer";
import Fortranslators from "../pages/Fortranslators";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Policy from "../pages/Policy";

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
          <Route path="/offer" element={<Offer />} />
          <Route path="/fortranslators" element={<Fortranslators />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default Page;
