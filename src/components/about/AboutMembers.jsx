import { comitteeMembers } from "./comitteeMembers";

const AboutMembers = () => {
  return (
    <section className="p-8 text-center my-8 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Comittee Members</h2>
      <ul className="md:flex flex-wrap">
        {comitteeMembers.map(({ name, img, role }, i) => {
          return (
            <li className="shadow-md mb-8 max-w-sm mx-auto md:w-5/12">
              <figure className="flex items-center justify-between text-center">
                <img
                  src={img}
                  alt={name}
                  className="h-full w-3/12 rounded-md"
                />
                <figcaption className="w-full">
                  <h3 className="heading font-bold">{name}</h3>
                  <p className="">{role}</p>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AboutMembers;
