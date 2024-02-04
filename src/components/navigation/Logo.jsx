import { Link } from "react-router-dom";

import logo from "../../images/logo.png";

const Logo = () => {
  return (
    <figure
      className="flex items-center"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <Link to="/">
        <img
          src={logo}
          alt="White Eagle on red background"
          title="Polish emblem"
          width="91"
          height="96"
          className="header-logo"
        />
      </Link>
      <figcaption>
        <Link
          to="/"
          className="ml-4 text-white text-xl md:text-lg xl:text-2xl font-bold"
        >
          The White Eagle
        </Link>
      </figcaption>
    </figure>
  );
};

export default Logo;
