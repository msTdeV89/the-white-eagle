import React from "react";

const HomeHours = () => {
  return (
    <section className="p-8 text-center">
      <h3 className="title">We are open 6 days a week!</h3>
      <dl className="">
        <div className="mb-4 text-lg">
          <dt className="font-bold">Monday</dt>
          <dd>Closed</dd>
        </div>
        <div className="mb-4 text-lg">
          <dt className="font-bold">Tuesday - Saturday</dt>
          <dd>19:00 - 23:00</dd>
        </div>
        <div className="mb-4 text-lg">
          <dt className="font-bold">Sunday</dt>
          <dd>12:00 - 15:30</dd>
        </div>
      </dl>
      <aside className="md:text-lg lg:mt-8">
        <p className="mb-4 md:mt-4">A carpark is provided on the premises.</p>
        <p className="">
          To ensure the safety of guests and staff, <br className="" />
          the club is equipped <br className="md:hidden" />
          with CCTV monitoring
        </p>
      </aside>
    </section>
  );
};

export default HomeHours;
