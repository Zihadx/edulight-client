import { NavLink, Outlet } from "react-router-dom";
import { FaBookOpen, FaHome, FaSchool, FaWallet } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import avatar from "../assets/profile-avatar/avatar.png";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side shadow-2xl">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 h-full shadow-2xl ">
          <div className="text-center mx-auto">
            <img
              className="rounded-full w-24 h-24"
              src={user && user.photoURL ? user.photoURL : avatar}
            />
            <h3 className="font-bold text-2xl text-purple-800 uppercase">{user?.displayName}</h3>
          </div>
          <ul className="font-semibold text-black mt-8">
            {/* Sidebar content here */}
            <>
              <li>
                <NavLink to="/dashboard/studentHome">
                  <FaHome></FaHome>Student Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mySelectedClass">
                  <FaSchool></FaSchool>Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrollClass">
                  <FaBookOpen></FaBookOpen>Enrolled Classes
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet>Payment history
                </NavLink>
              </li>

              {/* <li>
              <NavLink to="/dashboard/allusers">
                <FaUsers></FaUsers> All Users
              </NavLink>
            </li> */}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
