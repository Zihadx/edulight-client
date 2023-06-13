import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import avatar from "../../../assets/profile-avatar/avatar.png";
import logo from "../../../assets/logo/logo.png";
import useSelectedClass from "../../../Hooks/useSelectedClass";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [selectedClass] = useSelectedClass()

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/">Classes {selectedClass?.length || 0}</Link>
      </li>
      {/* <li>
        <Link to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</Link>
      </li> */}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-60 max-w-screen-xl text-white bg-stone-900 h-20 uppercase md:px-8">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52 text-sm font-semibold"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2">
            <img className="w-10 " src={logo} alt="" />
            <h3 className="text-2xl font-bold uppercase">EduLight</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm font-semibold">
            {navItems}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="btn btn-ghost font-bold uppercase"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-ghost font-bold uppercase">
                  Login
                </button>
              </Link>
            </>
          )}

          <div className="w-12 rounded-full">
            <img
              className="rounded-full w-12 h-12"
              src={user && user.photoURL ? user.photoURL : avatar}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
