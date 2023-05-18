import { Link } from "react-router-dom";
import logo from '../../assets/logo.webp'
import { useContext } from "react";
import { AuthContext } from "../context/UserContext";

const Navbar = () => {
  const {user} = useContext(AuthContext);
  console.log(user.email);
  const navItems = (
    <>
      <li className="font-bold">
        <Link to="/">Home</Link>
      </li>    
      <li className="font-bold">
        <Link to="/allToys">All Toys</Link>
      </li>    
      <li className="font-bold">
        <Link to="/myToys">My Toys</Link>
      </li>    
      <li className="font-bold">
        <Link to="/blogs">Blogs</Link>
      </li>    
      <li className="font-bold">
        <button>Profile Pic</button>
      </li> 
      <li className="font-bold">
        <Link to="/login">Login</Link>
      </li> 
      <li className="font-bold">
        <button>Log Out</button>
      </li>    
    </>
  );

  return (
    <div className="navbar bg-sky-300 h-18 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-24 h-14 rounded-full" src={logo} alt="" />
          </a>
        </Link> 
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
