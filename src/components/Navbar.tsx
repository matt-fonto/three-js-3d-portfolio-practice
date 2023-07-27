import { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.ico";
import { navLinks } from "../constants/index";
import { NavLink } from "../constants/types";
import { close, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <span className="sm:block hidden text-sm text-white">
            Mateus Fontoura | Portfolio
          </span>
        </Link>

        {/* NavLinks: Big Screens */}
        <ul className="hidden md:flex gap-4">
          {navLinks.map((item: NavLink) => (
            <li
              key={item.id}
              className={`${
                active === item.title ? "text-purple-400" : "text-secondary"
              } hover:text-white text-1xl font-medium cursor-pointer duration-200`}
              onClick={() => setActive(item.title)}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>

        {/* For Mobile: Burger Menu */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-8 h-8 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-gradient-to-r from-[#222] to-[#444] absolute top-20 right-0 mx-4 my-2 min-w-max z-10 rounded-md w-1/2`}
          >
            <ul className="flex justify-end items-start flex-col gap-2 w-full">
              {navLinks.map((item: NavLink) => (
                <li
                  key={item.id}
                  className={`${
                    active === item.title ? "text-white" : "text-secondary"
                  } text-center text-sm font-medium cursor-pointer w-full border rounded-lg py-2`}
                  onClick={() => {
                    setActive(item.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
