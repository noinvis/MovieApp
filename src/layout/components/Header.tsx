import { memo } from "react";
import img from "../../../src/shared/assets/logo.svg";
import { NavLink } from "react-router-dom";
import find from "../../../src/shared/assets/search-line.png";
import { Clapperboard, House, Search } from "lucide-react";
import { Bookmark } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-20 h-[80px] bg-black">
      <nav className="container flex justify-between items-center h-full">
        <div>
          <NavLink to={"/"}>
            <img src={img} />
          </NavLink>
        </div>
        <ul className="flex items-center max-[670px]:hidden">
          <li>
            <NavLink
              to={"/"}
              className={
                "flex flex-col items-center py-[3px] px-[10px] hover:bg-[#555] duration-300 rounded-[12px] w-[80px]"
              }
            >
              <House className="text-[#A1A1A1]" />
              <p className="text-[#A1A1A1] text-[14px] font-medium">Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/movies"}
              className={
                "flex flex-col items-center py-[3px] px-[10px] hover:bg-[#555] duration-300 rounded-[12px] w-[80px]"
              }
            >
              <Clapperboard className="text-[#A1A1A1]" />
              <p className="text-[#A1A1A1] text-[14px] font-medium">Movies</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/bookmark"}
              className={
                "flex flex-col items-center py-[3px] px-[10px] hover:bg-[#555] duration-300 rounded-[12px] w-[80px]"
              }
            >
              <Bookmark className="text-[#A1A1A1]" />
              <p className="text-[#A1A1A1] text-[14px] font-medium">Bookmark</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/search"}
              className={
                "flex flex-col items-center py-[3px] px-[10px] hover:bg-[#555] duration-300 rounded-[12px] w-[80px]"
              }
            >
              <img src={find} />
              <p className="text-[#A1A1A1] text-[14px] font-medium">Search</p>
            </NavLink>
          </li>
        </ul>
        <div className="gap-3 hidden max-[670px]:flex max-md:fixed max-md:bottom-0 max-md:left-0 max-md:w-full max-md:justify-evenly max-md:bg-black max-md:py-4 max-md:border-t z-30">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "duration-300 text-[#C61F1F] rounded-[10px] drop-shadow-red-700"
                  : ""
              } text-[20px] text-[#A1A1A1]`
            }
            to={"/"}
          >
            <House />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "duration-300 text-[#C61F1F] rounded-[10px] drop-shadow-red-700"
                  : ""
              } text-[20px] text-[#A1A1A1]`
            }
            to={"/movies"}
          >
            <Clapperboard />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `md:hidden ${
                isActive
                  ? "duration-300 text-[#C61F1F] rounded-[10px] drop-shadow-red-700"
                  : ""
              } text-[20px] text-[#A1A1A1]`
            }
            to={"/bookmark"}
          >
            <Bookmark />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "duration-300 text-[#C61F1F] rounded-[10px] drop-shadow-red-700"
                  : ""
              } text-[20px] text-[#A1A1A1]`
            }
            to={"/search"}
          >
            <Search />
          </NavLink>
        </div>
        <div className="">
          <button className="py-[18px] px-[65px] rounded-[12px] bg-[#C61F1F] text-white font-medium max-[520px]:px-[45px] max-[520px]:py-[8px]">
            Войти
          </button>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
