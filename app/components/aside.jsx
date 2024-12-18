"use client";
import { useState } from "react";
import Aside_menu_ul from "./aside_menu_ul";
import { GiHamburgerMenu } from "react-icons/gi";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickAside = () => {
    setIsOpen(!isOpen);
  };

  const closeAside = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={closeAside}></div>}

      <aside id="left" className={isOpen ? "open" : ""}>
        <Aside_menu_ul />
      </aside>

      <aside id="mobile_button" onClick={clickAside}>
        <GiHamburgerMenu />
      </aside>
    </>
  );
};

export default Aside;
