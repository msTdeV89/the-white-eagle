import { MdOutlineEmail } from "react-icons/md";

import { eventsList } from "./eventsList";
import BackToTop from "../utils/BackToTop";

const Events = () => {
  return (
    <main>
      <section className="py-8 text-center mt-8">
        <h2 className="text-4xl font-bold mb-16">Upcoming Events</h2>
        <ul className="flex flex-wrap justify-center md:justify-around px-4 max-w-screen-xl mx-auto">
          {eventsList.map(({ img, date, title, desc, fee }, i) => {
            return (
              <article
                key={i}
                className="shadow-md rounded-md w-96 mb-8 border-2 border-main md:w-5/12 xl:w-[560px]"
              >
                <figure className="xl:flex">
                  <img src={img} alt={title} className="rounded-md xl:w-72" />
                  <div className="bg-main text-white text-lg rounded-b-md">
                    <figcaption className="bg-white py-4 xl:py-6">
                      <h3 className="text-2xl font-bold text-black">{title}</h3>
                    </figcaption>
                    <div className="py-4 xl:px-2">
                      <p className="font-bold text-xl">{date}</p>
                      <p className="pb-4 font-bold text-xl">{fee}</p>
                      <p className="">{desc}</p>
                    </div>
                  </div>
                </figure>
              </article>
            );
          })}
        </ul>
        <aside className="my-16 xl:flex justify-center items-center bg-main pt-8 pb-4">
          <h3 className="text-xl lg:text-2xl font-bold xl:w-5/12 text-white">
            Do you want to organize an event?
          </h3>
          <a
            href="mailto:info@whiteeaglestafford.com"
            className="px-4 py-2 shadow-md text-lg bg-white text-black hover:bg-secondary hover:text-white hover:shadow-lg my-10 rounded-md flex justify-center items-center font-bold w-4/5 mx-auto transition-all max-w-sm xl:w-5/12 xl:mx-0"
          >
            <p className="">Email us</p>
            <MdOutlineEmail className="text-2xl ml-2" />
          </a>
        </aside>
        <BackToTop />
      </section>
    </main>
  );
};

export default Events;
