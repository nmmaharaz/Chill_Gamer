import { NavLink } from "react-router-dom";
import logo from "../assets/ChillGame.png";
import { useContext, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { IoMoon, IoSunny } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  const {SignOut, handleDarkMode, dark, user} = useContext(AuthContext)
  const handleSignOut = (e) =>{
    e.preventDefault();
    SignOut()
    .then((result)=>{
    })
    .catch((error)=>{
    })
  }
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
    return (
    <div className="sticky top-0 backdrop-blur-md z-10">
      <div className="w-full bg-[#16234d] opacity-100">
        <div className="w-10/12 mx-auto">
        <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                <NavLink className="text-[#16234d]" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className="text-[#16234d]" to="/reviews">All Reviews</NavLink>
              </li>
              <li>
                <NavLink className="text-[#16234d]" to="/addReview">Add Review</NavLink>
              </li>
              <li>
                <NavLink className="text-[#16234d]" to="/myReviews">My Reviews</NavLink>
              </li>
              <li>
                <NavLink className="text-[#16234d]" to="myWatchlist">Game WatchList</NavLink>
              </li>
          
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
          </ul>
        </div>
        <div className="navbar-end">
        {
            user && user?.email?<div className="flex items-center">
               {
                user && user?.photoURL ? (<div data-tip={user?.displayName} className="tooltip tooltip-bottom"><img className="w-[45px] h-[45px] rounded-full" src={user.photoURL} alt="" /></div>):(<p><CgProfile className="text-4xl" /></p>)
               }
              <NavLink onClick={handleSignOut} className="ml-3" to="/registration"><a className="btn text-white border-none bg-[#d77bdf]">LogOut</a></NavLink>
              </div>:<div><NavLink to="/login"><a className="btn border-none text-white bg-[#d77bdf]">Login</a></NavLink>
              <NavLink className="ml-3" to="/registration"><a className="btn text-white border-none bg-[#d77bdf]">Registration</a></NavLink></div>
          }
            <button className="ml-3" onClick={() => handleDarkMode()}>
              <input type="checkbox" className="toggle" defaultChecked />
          </button>
          {/* <div data-tip={user?.displayName} className="tooltip tooltip-bottom"><img className="w-12  cursor-pointer mr-3 h-12 rounded-full" src={user?.photoURL} alt="" /></div>
          <NavLink to="/login"><a className="btn border-none text-white bg-[#d77bdf]">Login</a></NavLink>
          <NavLink className="ml-3" to="/registration"><a className="btn text-white border-none bg-[#d77bdf]">Registration</a></NavLink>
          <NavLink onClick={handleSignOut} className="ml-3" to="/registration"><a className="btn text-white border-none bg-[#d77bdf]">LogOut</a></NavLink> */}
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
