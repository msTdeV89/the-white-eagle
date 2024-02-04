import { TbSend } from "react-icons/tb";

const ContactForm = () => {
  return (
    <section className="text-center p-8">
      <h2 className="text-4xl font-bold lg:mt-8 mb-16">Contact Us!</h2>
      <div className="xl:flex max-w-screen-xl mx-auto">
        <article className="lg:w-1/2">
          <h3 className="mt-8 mb-8 xl:mt-0 text-2xl">
            Not sure where to start?
          </h3>
          <p className="">
            Whether you have a business enquiry, suggestions for improving our
            website, <br />
            new ideas for community events, <br />
            want to share your experience from your visit, <br />
            etc. <br />
            <br />
            Please use the contact form. <br />
            Every message will be read.
          </p>
          <p className="mt-8 font-bold">We look forward to hear from you!</p>
        </article>

        <hr className="mx-auto bg-black w-4/5 my-8 xl:hidden" />

        <form
          action="https://httpbin.org/get"
          method="get"
          className="max-w-sm mx-auto"
        >
          <fieldset className="sm:w-96">
            <legend className="font-bold text-2xl mb-8">
              Send us a message
            </legend>
            <p className="mb-4">
              <label htmlFor="name" className="flex">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                minLength={3}
                maxLength={60}
                className="w-full p-2 rounded-md shadow-md"
              />
            </p>
            <p className="mb-4">
              <label htmlFor="email" className="flex">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
                minLength={3}
                maxLength={60}
                className="w-full p-2 rounded-md shadow-md"
              />
            </p>
            <p className="mb-4">
              <label htmlFor="message" className="flex">
                Message
              </label>
              <textarea
                type="message"
                id="message"
                name="message"
                placeholder="Your message"
                required
                cols={30}
                rows={10}
                minLength={10}
                maxLength={3000}
                className="w-full p-2 rounded-md shadow-md resize-none"
              />
            </p>
          </fieldset>
          <button className="button shadow-md text-xl bg-main text-white hover:text-black hover:shadow-lg">
            Send
            <TbSend className="ml-4 text-2xl" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
