// ------- ICONS ------
import { FiAlignJustify } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";

// RRD imports
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-black ">
      <header className="max-container flex items-center justify-between py-8 border-b-[1px] border-b-gray-600">
        <button className="md:hidden text-xl text-white">
          <FiAlignJustify className="text-xl text-white" />
        </button>
        <Link to="/">
          <img src="./assets/siteLogo.svg" alt="" />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-white">
            <li>
              <Link
                to="/"
                className="text-[13px] font-bold tracking-[2px] font-[Manrope]  hover:text-[#D87D4A] duration-300"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/headphones"
                className="text-[13px] font-bold tracking-[2px] font-[Manrope] hover:text-[#D87D4A] duration-300"
              >
                HEADPHONES
              </Link>
            </li>
            <li>
              <Link
                to="/speakers"
                className="text-[13px] font-bold tracking-[2px] font-[Manrope] hover:text-[#D87D4A] duration-300"
              >
                SPEAKERS
              </Link>
            </li>
            <li>
              <Link
                to="/earphones"
                className="text-[13px] font-bold tracking-[2px] font-[Manrope] hover:text-[#D87D4A] duration-300"
              >
                EARPHONES
              </Link>
            </li>
          </ul>
        </nav>
        <button className="text-xl md:text-2xl text-white hover:text-[#D87D4A] duration-300">
          <SlBasket />
        </button>
      </header>
    </div>
  );
}

export default NavBar;
