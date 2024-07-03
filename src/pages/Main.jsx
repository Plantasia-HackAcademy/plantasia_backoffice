import { Outlet } from "react-router";
import { Dashboard } from "../components/Dashboard";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { useState } from "react";

export const Main = () => {
  const [isNavHidden, setIsNavHidden] = useState(true);

  const toggleNavbar = () => {
    setIsNavHidden(!isNavHidden);
  };
  return (
    <>
      <Navbar toggleNavbar={toggleNavbar} isNavHidden={isNavHidden} />
      <Header toggleNavbar={toggleNavbar} />
      <Outlet />
    </>
  );
};
