import "../style/contact.scss";
import Form from "./contactComponents/Form";
import Map from "./contactComponents/Map";
import Payments from "./contactComponents/Payments";

const Contact = () => {
  return (
    <div className="contact-container">
      <Form />
      <Map />
      <Payments />
    </div>
  );
};

export default Contact;
