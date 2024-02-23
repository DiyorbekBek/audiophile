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
          <div className="dropdown z-50 dropdown-end">
            <div tabIndex={0} role="button">
              <SlBasket />
            </div>
            <div
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[377px] h-[488px]"
            >
              <div className="mx-8">
                <div className="flex justify-between my-8 items-center">
                  <p className="text-[#000000] font-bold text-[18px] tracking-[1.29px]">
                    CART (3)
                  </p>
                  <p className="text-[#000000] hover:text-[#D87D4A] transition text-[15px] opacity-[50%]">
                    Remove all
                  </p>
                </div>
                <div className="grid w-full grid-cols-2 mb-6 items-center">
                  <div className="flex items-center">
                    <div className="max-w-16 w-full h-16 bg-[#F1F1F1] rounded-lg">
                      <img
                        className="w-[50%] h-full m-auto"
                        src="/XX99Mark.svg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-[#000000] font-bold text-[15px]">
                        XX99 MK II
                      </p>
                      <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                        $ 2,999
                      </p>
                    </div>
                  </div>
                  <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex justify-between items-center px-6 ml-auto">
                    <button className="hover:text-[#FBAF85]">-</button>
                    <p className="font-bold text-[#000000] text-[13px]">1</p>
                    <button className="hover:text-[#FBAF85]">+</button>
                  </div>
                </div>
                <div className="grid w-full grid-cols-2 mb-6 items-center">
                  <div className="flex items-center">
                    <div className="max-w-16 w-full h-16 bg-[#F1F1F1] rounded-lg">
                      <img
                        className="w-[50%] h-full m-auto"
                        src="/XX99Mark.svg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-[#000000] font-bold text-[15px]">
                        XX99 MK II
                      </p>
                      <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                        $ 2,999
                      </p>
                    </div>
                  </div>
                  <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex justify-between items-center px-6 ml-auto">
                    <button className="hover:text-[#FBAF85]">-</button>
                    <p className="font-bold text-[#000000] text-[13px]">1</p>
                    <button className="hover:text-[#FBAF85]">+</button>
                  </div>
                </div>
                <div className="grid w-full grid-cols-2 mb-6 items-center">
                  <div className="flex items-center">
                    <div className="max-w-16 w-full h-16 bg-[#F1F1F1] rounded-lg">
                      <img
                        className="w-[50%] h-full m-auto"
                        src="/XX99Mark.svg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-[#000000] font-bold text-[15px]">
                        XX99 MK II
                      </p>
                      <p className="text-[#000000] opacity-[50%] font-bold text-[14px]">
                        $ 2,999
                      </p>
                    </div>
                  </div>
                  <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex justify-between items-center px-6 ml-auto">
                    <button className="hover:text-[#FBAF85]">-</button>
                    <p className="font-bold text-[#000000] text-[13px]">1</p>
                    <button className="hover:text-[#FBAF85]">+</button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[#000000] opacity-[50%] text-[15px]">
                    TOTAL
                  </p>
                  <p className="text-[#000000] text-[18px] font-bold">
                    $ 5,396
                  </p>
                </div>
                <button className="text-[#FFFFFF] hover:bg-[#FBAF85] transition font-bold text-[13px] bg-[#D87D4A] max-w-[313px] w-full h-12 mt-6">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </button>
      </header>
    </div>
  );
}

export default NavBar;
