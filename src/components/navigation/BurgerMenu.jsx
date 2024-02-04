import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { menuLinks } from "./linksList";
import { burgerToggle } from "../../redux/burgerslice";

const BurgerMenu = () => {
  const isOpen = useSelector((state) => state.burger.isOpen);
  const dispatch = useDispatch();

  return (
    <nav
      arial-label="main-mobile"
      className={`md:hidden origin-top fixed z-50 top-16 pb-16 left-0 bg-main w-screen h-screen grid items-center justify-center text-2xl ${
        isOpen ? "animate-open-menu" : "animate-close-menu "
      }`}
    >
      <ul className="">
        {menuLinks.map(({ linkTo, linkTxt }, i) => {
          return (
            <li
              key={i}
              className={`${i === menuLinks.length - 1 ? "" : "mb-8"}`}
            >
              <Link
                to={linkTo}
                className="block text-center text-white transition-all py-2 border border-2 px-16 rounded-lg shadow-md hover:scale-105 hover:bg-secondary hover:shadow-lg"
                onClick={() => {
                  dispatch(burgerToggle());
                  window.scrollTo(0, 0);
                }}
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

export default BurgerMenu;
