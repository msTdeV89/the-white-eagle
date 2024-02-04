const ContactLocation = () => {
  return (
    <section className="text-center pb-8 pt-4">
      <article className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold">Our Location</h2>
        <address className="my-8">
          <a
            href="https://maps.app.goo.gl/GvfJaPRxQFZjctp9A"
            className="transition-all hover:text-main"
            target="_blank"
            rel="noreferrer"
          >
            Riverway, Stafford,
            <br />
            ST16 3TH
          </a>
        </address>
        <div className="md:flex justify-around items-center">
          <div className="w-80 h-80 relative mx-auto md:m-0 xl:w-[720px] xl:h-[360px] z-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2534393.5336888875!2d-2.482777!3d51.659952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a717d53f94d15%3A0xd6aa38d9e44253e3!2sThe%20White%20Eagle%20Club!5e0!3m2!1sen!2sus!4v1707054202510!5m2!1sen!2sus"
              aria-hidden="false"
              tabIndex="0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The White Eagle location"
              className="absolute top-0 left-0 w-full h-full z-0"
            />
          </div>
          <div className="">
            <dl className="mt-8">
              <div className="mb-4 text-lg">
                <dt className="font-bold">Monday</dt>
                <dd>Closed</dd>
              </div>
              <div className="mb-4 text-lg">
                <dt className="font-bold">Tuesday - Saturday</dt>
                <dd>19:00 - 23:00</dd>
              </div>
              <div className="text-lg">
                <dt className="font-bold">Sunday</dt>
                <dd>12:00 - 15:30</dd>
              </div>
            </dl>
            <aside className="mt-8">
              <h2 className="text-2xl font-bold mb-8">Contact details</h2>
              <address className="flex flex-col">
                <a href="mailto:info@whiteeaglestafford.com" className="mb-4">
                  info@whiteeaglestafford.com
                </a>
                <a href="tel:+4401785242327" className="">
                  {"(+44)"} 01785 242327
                </a>
              </address>
            </aside>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ContactLocation;
