import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaBookOpen,
  FaHome,
  FaSchool,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import avatar from "../assets/profile-avatar/avatar.png";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  // const isStudent = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className=" text-lg drawer-button lg:hidden mt-4 w-full ml-8"
        >
          <FaBars></FaBars>
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side shadow-xl">
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay shadow-xl "
        ></label>
        <div className="menu p-4 w-80 h-full bg-purple-200">
          <div className="text-center mx-auto">
            <img
              className="rounded-full w-24 h-24"
              src={user && user.photoURL ? user.photoURL : avatar}
            />
            <h3 className="font-bold text-2xl text-purple-800 uppercase">
              {user?.displayName}
            </h3>
          </div>
          <ul className="font-semibold text-black mt-8">
            {/* Sidebar content here */}

            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/manageClass">
                    <FaSchool></FaSchool>Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUsers">
                    <FaUsers></FaUsers>Manage Users
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink to="/dashboard/addClass">
                    <FaSchool></FaSchool>Add a class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClass">
                    <FaBookOpen></FaBookOpen>My class
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/mySelectedClass">
                    <FaSchool></FaSchool>Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolClass">
                    <FaBookOpen></FaBookOpen>Enrolled Classes
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <FaWallet></FaWallet>Payment history
                  </NavLink>
                </li>
              </>
            )}

            {/* {isStudent ? :<></>}
            {} */}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                <FaSchool></FaSchool>Classes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
