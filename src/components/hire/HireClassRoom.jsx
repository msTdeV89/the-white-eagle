import { MdOutlineEmail } from "react-icons/md";
import smallroom from "../../images/smallroom.png";

const HireClassRoom = () => {
  return (
    <section className="text-center p-8 mb-16 max-w-md mx-auto">
      <article className="">
        <h2 className="text-4xl font-bold mb-8">Class/Meeting Room</h2>
        <p className="">
          Our class/meeting room situated on the first floor and was used in the
          past <br className="hidden sm:block" />
          as a home for the Polish School.
        </p>
        <p className="my-6">Currently is used for hosting meetings etc</p>
        <p className="">Room provides seating for ~20 people.</p>

        <a
          href="mailto:info@whiteeaglestafford.com"
          className="px-4 py-2 shadow-md text-lg bg-main text-white hover:bg-secondary hover:text-white hover:shadow-lg my-10 rounded-md flex justify-center items-center font-bold w-4/5 mx-auto transition-all"
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

export default HireClassRoom;
