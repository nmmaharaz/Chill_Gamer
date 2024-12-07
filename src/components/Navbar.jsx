import { NavLink } from "react-router-dom";
import logo from "../assets/ChillGame.png";
import { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { IoMoon, IoSunny } from "react-icons/io5";
const Navbar = () => {
  const {SignOut, handleDarkMode, dark,} = useContext(AuthContext)
  const handleSignOut = (e) =>{
    e.preventDefault();
    SignOut()
    .then((result)=>{
      console.log("ami logout hoyechi")
    })
    .catch((error)=>{
      console.log("Miya eto vul koro keno?")
    })
  }
  return (
    <div>
      <div className="navbar bg-[#16234d]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/reviews">All Reviews</NavLink>
              </li>
              <li>
                <NavLink to="/addReview">Add Review</NavLink>
              </li>
              <li>
                <NavLink to="/myReviews">My Reviews</NavLink>
              </li>
              <li>
                <NavLink to="myWatchlist">Game WatchList</NavLink>
              </li>
              <button className="" onClick={() => handleDarkMode()}>
            {dark && <IoSunny className="text-white text-right" />}
            {!dark && <IoMoon />}
          </button>
            </ul>
          </div>
          <div>
            <img className="w-24 h-full" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu *:text-white *:font-semibold menu-horizontal px-1">
          <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/reviews">All Reviews</NavLink>
              </li>
              <li>
                <NavLink to="/addReview">Add Review</NavLink>
              </li>
              <li>
                <NavLink to="/myReviews">My Reviews</NavLink>
              </li>
              <li>
                <NavLink to="myWatchlist">Game WatchList</NavLink>
              </li>
              <button className="" onClick={() => handleDarkMode()}>
            {dark && <IoSunny className="text-white text-2xl" />}
            {!dark && <IoMoon className="text-black text-2xl" />}
          </button>
              
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/login"><a className="btn border-none text-white bg-[#d77bdf]">Login</a></NavLink>
          <NavLink className="ml-3" to="/registration"><a className="btn text-white border-none bg-[#d77bdf]">Registration</a></NavLink>
          <NavLink onClick={handleSignOut} className="ml-3" to="/registration"><a className="btn text-white border-none bg-[#d77bdf]">LogOut</a></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
