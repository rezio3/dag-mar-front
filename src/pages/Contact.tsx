import { useLayoutEffect, useRef } from "react";
import "../style/contact.scss";
import Form from "./contactComponents/Form";
import Map from "./contactComponents/Map";
import Payments from "./contactComponents/Payments";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const paymentsRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash === "#platnosci") {
      requestAnimationFrame(() => {
        setTimeout(() => {
          paymentsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 300);
      });
    }
  }, [location]);
  return (
    <div className="contact-container">
      <Form />
      <Map />
      <div ref={paymentsRef}>
        <Payments />
      </div>
    </div>
  );
};

export default Contact;
