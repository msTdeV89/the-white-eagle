import { Outlet } from "react-router-dom";

import Header from "../components/navigation/Header";
import BurgerMenu from "../components/navigation/BurgerMenu";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <BurgerMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
