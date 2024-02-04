import AboutAssociation from "./AboutAssociation";
import AboutBusinesses from "./AboutBusinesses";
import AboutMembers from "./AboutMembers";
import AboutMembership from "./AboutMembership";

const About = () => {
  return (
    <main>
      <div className="xl:flex justify-center items-center">
        <AboutMembership />
        <hr className="mx-auto bg-black w-4/5 md:my-6 xl:hidden" />
        <AboutBusinesses />
      </div>
      <hr className="mx-auto bg-black w-4/5 md:my-6" />
      <AboutMembers />
      <hr className="mx-auto bg-black w-4/5 md:my-6" />
      <AboutAssociation />
    </main>
  );
};

export default About;
