import { offerList } from "./offerList";

const HomeOffer = () => {
  return (
    <section className="p-8 text-center">
      <article className="">
        <h3 className="title md:text-2xl md:mb-16">
          We're open all year, <br className="md:hidden" />
          please check our offer.
        </h3>
        <div className="flex flex-wrap justify-around lg:justify-center mt-8">
          {offerList.map(({ image, title, text, alt, htmlTitle }, i) => {
            return (
              <figure
                key={i}
                className="text-left mb-8 shadow-lg rounded-md max-w-80 lg:max-w-96 mx-4 xl:mx-10 xl:my-10"
              >
                <img
                  className="rounded-t-md md:h-60 lg:h-auto"
                  src={image}
                  alt={alt}
                  title={htmlTitle}
                />
                <div className="p-2 md:p-4">
                  <figcaption className="heading my-2 font-bold">
                    {title}
                  </figcaption>
                  <p className="">{text}</p>
                </div>
              </figure>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default HomeOffer;
