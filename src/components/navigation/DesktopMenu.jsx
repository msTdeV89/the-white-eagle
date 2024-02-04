import { Link, useLocation } from "react-router-dom";

import { menuLinks } from "./linksList";

const DesktopMenu = () => {
  const currentLocation = useLocation();

  return (
    <nav aria-label="main-desktop" className="hidden md:block">
      <ul className="flex">
        {menuLinks.map(({ linkTo, linkTxt, location }, i) => {
          return (
            <li
              key={i}
              className="w-24 text-center text-lg text-white transition-all hover:text-black mr-1 lg:mr-3 xl:mr-6"
            >
              <Link
                to={linkTo}
                onClick={() => window.scrollTo(0, 0)}
                className={`${
                  currentLocation.pathname === location ? "font-bold" : ""
                } block`}
              >
                {linkTxt}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
