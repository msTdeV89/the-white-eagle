import { MdOutlineEmail } from "react-icons/md";
import smallroom from "../../images/smallroom.png";

const HireSmallRoom = () => {
  return (
    <section className="text-center p-8 mb-16 max-w-md mx-auto">
      <article className="">
        <h2 className="text-4xl font-bold mb-8">Small Function Room</h2>
        <p className="mb-6">
          Our small function room is available for smaller social venues like
          birthday parties, works events, gatherings, plays, workshops and
          classes, etc.
        </p>
        <p className="mb-6">Room provides seating for ~20 people.</p>

        <a
          href="mailto:info@whiteeaglestafford.com"
          className="px-4 py-2 shadow-md text-lg bg-main text-white hover:bg-secondary hover:text-white hover:shadow-lg my-10 rounded-md flex justify-center items-center font-bold w-4/5 mx-auto transition-all xl:mt-[88px]"
        >
          <p className="">Email us to hire this room</p>
          <MdOutlineEmail className="text-2xl ml-2" />
        </a>
      </article>
      <article className="flex flex-col items-center">
        <img
          src={smallroom}
          alt="123"
          className="max-w-sm mb-4 rounded-md shadow-md max-h-[320px] hover:scale-105 xl:hover:scale-125 transition-all hover:border-white hover:border-4"
        />
      </article>
    </section>
  );
};

export default HireSmallRoom;
