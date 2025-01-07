import { Link, NavLink } from "react-router-dom";
import logo from "../assets/ChillGame.png";
import { useContext, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { IoMoon, IoSunny } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import "../../src/App.css";
import { Button } from "flowbite-react";
const Navbar = () => {
  const { SignOut, handleDarkMode, dark, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleSignOut = (e) => {
    e.preventDefault();
    SignOut()
      .then((result) => {})
      .catch((error) => {});
  };
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  console.log(user)
  return (
    <div className="fixed z-50 w-full">
      <div className="w-full bg-[#000221] dark:bg-white opacity-100">
        <div className="w-10/12 mx-auto">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 text-white w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm *:text-white *:font-semibold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                      to="/reviews"
                    >
                      All Reviews
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                      to="/addReview"
                    >
                      Add Review
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                      to="/myReviews"
                    >
                      My Reviews
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                      to="myWatchlist"
                    >
                      Game WatchList
                    </NavLink>
                  </li>
                  {user && user?.email ? (
                    <div className="lg:flex items-center hidden">
                      <NavLink
                        onClick={handleSignOut}
                        className="ml-3"
                        to="/registration"
                      >
                        <a className="btn text-white border-none bg-[#d77bdf]">
                          LogOut
                        </a>
                      </NavLink>
                    </div>
                  ) : (
                    <div>
                      <NavLink to="/login">
                        <a className="btn border-none text-white bg-[#d77bdf]">
                          Login
                        </a>
                      </NavLink>
                      <NavLink className="ml-3" to="/registration">
                        <a className="btn text-white border-none bg-[#d77bdf]">
                          Registration
                        </a>
                      </NavLink>
                    </div>
                  )}
                </ul>
              </div>
              <div>
                <img className="w-24 h-full" src={logo} alt="" />
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu  *:font-semibold menu-horizontal px-1">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `hoovereffect ${
                        isActive ? "text-[#8750f7]" : "text-white dark:text-gray-700"
                      }`
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `hoovereffect ${
                        isActive ? "text-[#8750f7]" : "text-white dark:text-gray-700"
                      }`
                    }
                    to="/reviews"
                  >
                    All Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `hoovereffect ${
                        isActive ? "text-[#8750f7]" : "text-white dark:text-gray-700"
                      }`
                    }
                    to="/addReview"
                  >
                    Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `hoovereffect ${
                        isActive ? "text-[#8750f7]" : "text-white dark:text-gray-700"
                      }`
                    }
                    to="/myReviews"
                  >
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `hoovereffect ${
                        isActive ? "text-[#8750f7]" : "text-white dark:text-gray-700"
                      }`
                    }
                    to="myWatchlist"
                  >
                    Game WatchList
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <button className="mr-4">
                <label className="swap swap-rotate">
                  <input className="hidden" type="checkbox" />
                  <svg
                  onClick={() => handleDarkMode()}
                    className="swap-on text-yellow-500 h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  <svg
                  onClick={() => handleDarkMode()}
                    className="swap-off h-10 text-gray-500 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </button>
              {user?.photoURL ? (
                <div
                  onMouseLeave={() => setIsOpen(false)}
                  className="relative inline-block"
                >
                  <img
                    src={user?.photoURL}
                    alt="Hover to see dropdown"
                    className="w-[45px] h-[45px] rounded-full cursor-pointer"
                    onMouseEnter={() => setIsOpen(true)}
                  />

                  {isOpen && (
                    <div
                      className="absolute right-[-60px] mt-2 w-64  bg-white border border-gray-200 rounded shadow-lg"
                      onMouseLeave={() => setIsOpen(false)}
                    >
                      <ul className="text-gray-700">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          {user?.displayName}
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          {user?.email}
                        </li>
                      </ul>

                      <div className="lg:flex pb-4 items-center hidden">
                        <NavLink
                          onClick={handleSignOut}
                          className="ml-3"
                          to="/registration"
                        >
                          <a className="btn text-white border-none bg-[#d77bdf]">
                            LogOut
                          </a>
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center">
                  <Link className="border-none" to="/login">
                    <Button className="border-none" gradientDuoTone="purpleToPink">Login</Button>
                  </Link>
                  <Link className="ml-3" to="/registration">
                    <Link className="hover:bg-purple-700 border border-solid border-[#8750f7] text-[#8750f7] px-6 py-2 rounded-3xl shadow-lg hover:text-white font-semibold">
                      Registration
                    </Link>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
