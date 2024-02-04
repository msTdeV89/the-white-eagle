import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

import { burgerToggle } from "../../redux/burgerslice";

const BurgerButton = () => {
  const isOpen = useSelector((state) => state.burger.isOpen);
  const dispatch = useDispatch();

  return (
    <button className="">
      {isOpen ? (
        <MdClose
          className="md:hidden text-4xl text-white transition-all hover:scale-110"
          onClick={() => dispatch(burgerToggle())}
        />
      ) : (
        <RxHamburgerMenu
          className="md:hidden text-4xl text-white transition-all hover:scale-110"
          onClick={() => dispatch(burgerToggle())}
        />
      )}
    </button>
  );
};

export default BurgerButton;
