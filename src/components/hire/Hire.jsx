import HireMainHall from "./HireMainHall";
import HireSmallRoom from "./HireSmallRoom";
import HireClassRoom from "./HireClassRoom";
import BackToTop from "../utils/BackToTop";

const Hire = () => {
  return (
    <main>
      <HireMainHall />
      <section>
        <h2 className="bg-main mb-16 text-2xl font-bold text-center py-4 px-8 text-white shadow-md">
          We also offers number <br className="lg:hidden" />
          of rooms available for hire <br className="lg:hidden" />
          to host your venue:
        </h2>
      </section>
      <div className="xl:max-w-screen-xl mx-auto xl:flex">
        <HireSmallRoom />
        <HireClassRoom />
      </div>
      <BackToTop />
    </main>
  );
};

export default Hire;
