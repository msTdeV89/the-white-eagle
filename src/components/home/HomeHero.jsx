import hero from "../../images/hero-pattern.jpg";

const HomeHero = () => {
  return (
    <section className="xl:my-16">
      <article className="xl:flex">
        <img
          src={hero}
          alt="the building of The White Eagle Club"
          className="xl:w-2/3"
        />
        <div className="text-center p-8 xl:w-1/2 lg:flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl xl:text-4xl font-extrabold mb-8 md:my-12">
            The White Eagle Club
          </h2>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br className="hidden sm:block" />
            Laudantium numquam, inventore doloremque deleniti quam nobis!
          </p>
        </div>
      </article>
    </section>
  );
};

export default HomeHero;
