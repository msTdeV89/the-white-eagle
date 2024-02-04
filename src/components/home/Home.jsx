import BackToTop from "../utils/BackToTop";
import HomeHero from "./HomeHero";
import HomeOffer from "./HomeOffer";
import HomeHours from "./HomeHours";

const Home = () => {
  return (
    <main className="main-default flex flex-col">
      <HomeHero />
      <hr className="mx-auto bg-black w-4/5 md:my-6" />
      <HomeOffer />
      <hr className="mx-auto bg-black w-4/5 md:my-6" />
      <HomeHours />
      <BackToTop />
    </main>
  );
};

export default Home;
