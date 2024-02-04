const ContactGetHere = () => {
  const itemStyles =
    "p-4 rounded-md max-w-sm mx-auto shadow-md bg-main text-white font-bold";

  return (
    <section className="text-center p-8">
      <h2 className="text-3xl font-bold mb-8">Getting Here</h2>
      <div className="xl:flex justify-center">
        <article className="xl:my-8 xl:mx-16">
          <h3 className="font-bold text-xl mb-8">
            We are easily accessed <br />
            by convenient public transport services:
          </h3>
          <ul className="">
            <li className={`${itemStyles} mb-4`}>
              Stafford Railway Station <br />
              (10 minutes walking distance)
            </li>
            <li className={itemStyles}>
              Queensville bus stop <br />
              (Route 74)
            </li>
          </ul>
        </article>
        <article className="my-8 xl:mx-16">
          <h3 className="font-bold text-xl mb-8">
            We offer onsite parking <br />
            accessible to guests and members:
          </h3>
          <ul className="">
            <li className={`${itemStyles} mb-4`}>Capacity of 50 vehicles</li>
            <li className={`${itemStyles} mb-4`}>
              Dedicated parking area for members
            </li>
            <li className={`${itemStyles} mb-4`}>
              Dedicated space for coaches
            </li>
            <li className={itemStyles}>
              Easy direct access to the main hall stage i.e. for offloading
              equipment
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ContactGetHere;
