/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [disabled, setDisabled] = useState(true);
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch;
          setDisabled(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          setDisabled(true);
        }
      });
  };
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch;
          setDisabled(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          setDisabled(true);
        }
      });
  };

  return (
    <div className="w-full mx-auto">
      <Helmet>
        <title>Bistro Boss | Manage Users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4 text-center">Manage Users</h3>

      <div className="overflow-x-auto md:ps-12">
        <table className="table table-zebra w-full bg-purple-50 text-center">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Role</th>
              <th>Make Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                
                <td>
                  <button
                      onClick={() => handleMakeInstructor(user)}
                    className="btn btn-sm btn-ghost bg-purple-900 text-xs text-white hover:text-slate-900"
                    disabled={user.role === "instructor"}
                  >
                    Instructor
                  </button>
                </td>
                
                <td>
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-sm btn-ghost bg-purple-900 text-xs text-white hover:text-slate-900"
                    disabled={user.role === "admin"}
                  >
                    Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
