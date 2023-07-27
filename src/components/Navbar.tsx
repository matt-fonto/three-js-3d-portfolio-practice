import { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.ico";
import { navLinks } from "../constants/index";
import { NavLink } from "../constants/types";
import { menu } from "../assets";

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
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <span className="sm:block hidden text-sm text-white">
            Mateus Fontoura | Portfolio
          </span>
        </Link>

        {/* NavLinks: Big Screens */}
        <ul className="flex gap-4">
          {toggle &&
            navLinks.map((item: NavLink) => (
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
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menu}
            alt="menu"
            className="w-4 h-4 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {
            // If toggle is true, show the menu
            toggle && (
              <ul>
                <li>Example</li>
              </ul>
            )
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
