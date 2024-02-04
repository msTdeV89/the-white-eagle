import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-main text-center text-white">
      <section className="main-default w-full flex flex-col items-center p-8  lg:flex-row lg:justify-around lg:items-start">
        <article className="">
          <h3 className="text-2xl font-bold mb-4">Our Location</h3>
          <address>
            <a
              href="https://maps.app.goo.gl/GvfJaPRxQFZjctp9A"
              className="hover:text-black transition-all text-xl"
              target="_blank"
              rel="noreferrer"
            >
              Riverway, Stafford,
              <br />
              ST16 3TH
            </a>
          </address>
        </article>
        <article className="my-12 lg:my-0">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <address className="">
            <a
              href="mailto:info@whiteeaglestafford.com"
              className="hover:text-black transition-all block text-xl"
            >
              info@whiteeaglestafford.com
            </a>
            <a
              href="tel:+4401785242327"
              className="mt-4 hover:text-black transition-all block text-xl"
            >
              <span>{"(+44)"}01785242327</span>
            </a>
          </address>
        </article>
        <article className="">
          <h3 className="text-2xl font-bold mb-4">Socials</h3>
          <a
            href="https://www.facebook.com/whiteeagleclubstafford/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare className="mx-auto hover:text-facebook text-5xl mt-4 transition-all" />
          </a>
        </article>
      </section>
      <p className="main-default justify-center text-lg py-10">
        <span className="">&copy; All rights reserved</span>
        <span className="font-bold ml-2">zer0ne</span>
      </p>
    </footer>
  );
};

export default Footer;
