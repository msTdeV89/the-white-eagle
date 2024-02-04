import { FaRegHandBackFist } from "react-icons/fa6";

const BackToTop = () => {
  return (
    <div className="flex justify-center items-center mb-16 lg:mt-8">
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="button shadow-md text-xl bg-main text-white hover:text-black hover:shadow-lg"
      >
        Back to top
        <FaRegHandBackFist className="text-center text-3xl ml-4" />
      </button>
    </div>
  );
};

export default BackToTop;
