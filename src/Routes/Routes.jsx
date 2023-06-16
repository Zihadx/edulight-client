import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../Pages/Dashboard/Students/MySelectedClass";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import MyClass from "../Pages/Dashboard/Instructor/MyClass";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import PrivateRoute from "./PrivateRoute";
import AdminRoutes from "./AdminRoutes";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import Payments from "../Pages/Dashboard/Payment/Payments";
import EnrolledClass from "../Pages/Dashboard/Students/EnrolledClass";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateClass from "../Pages/Dashboard/Instructor/UpdateClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mySelectedClass",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "enrolClass",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path: "payment/:id",
        element: <Payments></Payments>,
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoutes>
            <ManageUsers></ManageUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "manageClass",
        element: (
          <AdminRoutes>
            <ManageClasses></ManageClasses>
          </AdminRoutes>
        ),
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
      {
        path:'updateClass/:id',
        element:<UpdateClass></UpdateClass>
      }
    ],
  },
]);
