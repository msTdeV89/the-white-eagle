import BackToTop from "../utils/BackToTop";
import ContactForm from "./ContactForm";
import ContactLocation from "./ContactLocation";
import ContactGetHere from "./ContactGetHere";

const Contact = () => {
  return (
    <main>
      <ContactForm />
      <hr className="mx-auto bg-black w-4/5 my-8" />
      <ContactLocation />
      <hr className="mx-auto bg-black w-4/5 my-8" />
      <ContactGetHere />
      <BackToTop />
    </main>
  );
};

export default Contact;
