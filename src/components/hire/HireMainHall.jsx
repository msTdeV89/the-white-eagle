import { hireOfferts } from "./hireOfferts";
import { images } from "./images";
import { MdOutlineEmail } from "react-icons/md";

const HireMainHall = () => {
  return (
    <section className="text-center py-8 mb-16 max-w-md xl:max-w-screen-xl mx-auto">
      <article className="px-8 xl:flex justify-around xl:my-16">
        <div className="xl:w-5/12">
          <h2 className="text-4xl font-bold mb-8">Main Hall</h2>
          <p className="mb-6">
            Our large function room is available for weddings, anniversaries,
            wakes, fundraisers, sports presentations, birthday parties, works
            events, sporting presentations, concerts, <br />
            plays, workshops and classes, <br />
            Christmas parties and all sorts of events. <br />
            Check our{" "}
            <a
              href="https://www.facebook.com/whiteeagleclubstafford/"
              target="_blank"
              rel="noreferrer"
              className="text-facebook font-bold"
            >
              Facebook
            </a>{" "}
            account for more pictures from recent events.
          </p>
          <p className="mb-6">
            Kitchen facilities for hot food preparation also available as an
            option - please mention on booking.
          </p>
        </div>
        <ul className="xl:w-5/12">
          <p className="font-bold text-xl mb-4">Standard booking includes:</p>
          {hireOfferts.map((offer, i) => {
            return (
              <li
                className="text-left mb-4 px-4 py-2 shadow-md rounded-md font-bold"
                key={i}
              >
                {offer}
              </li>
            );
          })}
        </ul>
      </article>
      <aside className="">
        <a
          href="mailto:info@whiteeaglestafford.com"
          className="px-4 py-2 shadow-md text-lg bg-main text-white hover:bg-secondary hover:text-white hover:shadow-lg my-10 rounded-md flex justify-center items-center font-bold w-4/5 mx-auto transition-all max-w-sm"
        >
          <p className="">Email us to hire this room</p>
          <MdOutlineEmail className="text-2xl ml-2" />
        </a>
      </aside>
      <article className="flex flex-col items-center xl:flex-row xl:flex-wrap xl:items-around xl:justify-around xl:h-[720px]">
        {images.map((img, i) => {
          return (
            <img
              src={img}
              alt="123"
              key={i}
              className={`max-w-sm rounded-md shadow-md max-h-[320px] hover:scale-105 xl:hover:scale-125 transition-all hover:border-white hover:border-4 ${
                i === images.length - 1 ? "" : "mb-4"
              }`}
            />
          );
        })}
      </article>
    </section>
  );
};

export default HireMainHall;
