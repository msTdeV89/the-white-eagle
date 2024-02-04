import { MdOutlineEmail } from "react-icons/md";

const AboutBusinesses = () => {
  return (
    <section className="p-8 text-center my-8 xl:ml-20">
      <article className="">
        <h2 className="text-4xl font-bold mb-8">
          Polish Businesses <br />
          in Stafford
        </h2>
        <h3 className="text-2xl font-bold mb-8 max-w-sm mx-auto">
          There is a large number of Polish businesses operating in Stafford and
          surrounding areas.
        </h3>
        <p className="mb-8">
          We would like to give a Polish community an opportunity <br />
          to support them by listing them on our website.
        </p>
        <p className="">
          If you are a business owner please get in touch <br />
          to arrange listing of your business on our website.
        </p>
        <aside className="">
          <a
            href="mailto:info@whiteeaglestafford.com"
            className="px-4 py-2 shadow-md text-lg bg-main text-white hover:bg-secondary hover:text-white hover:shadow-lg my-10 rounded-md flex justify-center items-center font-bold w-4/5 mx-auto transition-all max-w-sm"
          >
            <p className="">Email us</p>
            <MdOutlineEmail className="text-2xl ml-2" />
          </a>
          <p className="font-bold">
            DISCLAIMER: None of the companies listed here <br />
            are endorsed by the Club
          </p>
        </aside>
      </article>
      <article className="">
        <ul className=""></ul>
      </article>
    </section>
  );
};

export default AboutBusinesses;

// Your contact details / Website #1
