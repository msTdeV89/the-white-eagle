import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import BurgerButton from "./BurgerButton";

const Header = () => {
  return (
    <header className="bg-main shadow-md fixed w-full top-0 z-50">
      <section className="main-default justify-between items-center px-4 md:px-8 xl:px-0 h-16">
        <Logo />
        <BurgerButton />
        <DesktopMenu />
      </section>
    </header>
  );
};

export default Header;
