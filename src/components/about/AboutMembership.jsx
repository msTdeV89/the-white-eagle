import React from "react";

const AboutMembership = () => {
  const benefits = [
    "Cheaper Bar Prices",
    "Discounted Club Venue Tickets",
    "Free Hire of Small Function Room",
  ];

  return (
    <section className="p-8 text-center my-8">
      <article className="">
        <h2 className="text-4xl font-bold mb-8">Join Us!</h2>
        <p className="">
          One of the best ways to support <br />
          The White Eagle Club and our community
          <br />
          is by becoming a member!
        </p>
        <p className="my-8 font-bold">
          Memberships are valid until the 31st December <br />
          of each year and open to adults 18 years and over.
        </p>
        <p className="">
          Currently the membership fee <br />
          has to be paidin person at the bar <br />
          (however we are working on the online payment system).
        </p>
      </article>
      <article className="mt-8">
        <h2 className="text-4xl font-bold mb-8">Membership Benefits</h2>
        <ul className="">
          {benefits.map((benefit, i) => {
            return (
              <li className="mb-4 px-4 max-w-sm mx-auto py-2 bg-main text-white shadow-md rounded-md font-bold">
                {benefit}
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default AboutMembership;
