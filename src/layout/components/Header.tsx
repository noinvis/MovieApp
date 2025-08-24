import { memo, useEffect, useState } from "react";
import img from "../../../src/shared/assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import find from "../../../src/shared/assets/search-line.png";
import { Clapperboard, House, Moon, Search, Sun } from "lucide-react";
import { Bookmark } from "lucide-react";
import { jwtDecode } from "jwt-decode";

interface GoogleUser {
  name: string;
  email: string;
  picture: string;
}

const Header = () => {
  const [user, setUser] = useState<GoogleUser | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("google-token");
    if (token) {
      try {
        const decoded: GoogleUser = jwtDecode(token);
        setUser(decoded);
      } catch (e) {
        console.error("Invalid token", e);
      }
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("google-token");
    setUser(null);
    navigate("/");
  };
  return (
    <header className="w-full sticky top-0 z-20 h-[80px] bg-black dark:bg-white">
      <nav className="container flex justify-between items-center h-full">
        <div>
          <NavLink to={"/"}>
            <img src={img} />
          </NavLink>
        </div>
        <ul className="flex items-center max-[820px]:hidden">
          <li>
            <NavLink
              to={"/"}
              className={
                "flex flex-col items-center py-[3px] px-[10px] hover:bg-[#555] dark:hover:bg-[#f7f3f3] duration-300 rounded-[12px] w-[80px]"
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
                "flex flex-col items-center py-[3px] px-[10px] hover:bg-[#555] dark:hover:bg-[#f7f3f3] duration-300 rounded-[12px] w-[80px]"
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
                "flex flex-col items-center py-[3px] px-[10px] hover:bg-[#555] dark:hover:bg-[#f7f3f3] duration-300 rounded-[12px] w-[80px]"
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
                "flex flex-col items-center py-[3px] px-[10px] hover:bg-[#555] dark:hover:bg-[#f7f3f3] duration-300 rounded-[12px] w-[80px]"
              }
            >
              <img src={find} />
              <p className="text-[#A1A1A1] text-[14px] font-medium">Search</p>
            </NavLink>
          </li>
        </ul>
        <div className="gap-3 hidden max-[820px]:flex max-[820px]:fixed max-[820px]:bottom-0 max-[820px]:left-0 max-[820px]:w-full max-[820px]:justify-evenly max-[820px]:bg-black dark:max-[820px]:bg-white max-[820px]:py-4 z-30">
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
              `${
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
        <div>
          {user ? (
            <div className="flex items-center gap-[10px]">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-700 dark:bg-gray-200 text-white dark:text-black"
              >
                {darkMode ? <Moon size={20} /> : <Sun size={20} /> }
              </button>
              <div className="flex flex-col items-end max-[500px]:hidden">
                <p>{user.name}</p>
                <p className="text-[12px] text-[#999]">{user.email}</p>
              </div>
              <img
                src={user.picture}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <button
                onClick={handleLogout}
                className="py-2 px-4 rounded-[12px] bg-[#C61F1F] font-medium dark:text-white"
              >
                Выйти
              </button>
            </div>
          ) : (
              <div className="flex items-center gap-[10px]">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-gray-700 dark:bg-gray-200 text-white dark:text-black"
                >
                  {darkMode ? <Moon size={20}/> : <Sun size={20} />}
                </button>
                <button
                  onClick={() => navigate("/googleAuth")}
                  className="py-2 px-4 rounded-[12px] bg-[#C61F1F] font-medium dark:text-white"
                >
                  Войти
                </button>
              </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
