/* eslint-disable no-unused-vars */
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [disabled, setDisabled] = useState(true);
  const { data: manageClass = [], refetch } = useQuery(
    ["manageClass"],
    async () => {
      const res = await axiosSecure.get("/manageClass");
      return res.data;
    }
  );

  const handleApproveClass = (classes) => {
    fetch(`http://localhost:5000/manageClass/approve/${classes._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          setDisabled(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${classes.classesName} is  Approved`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          setDisabled(true);
        }
      });
  };

  const handleDenyClass = (classes) => {
    fetch(`http://localhost:5000/manageClass/deny/${classes._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          setDisabled(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${classes.classesName} is  Deny`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          setDisabled(true);
        }
      });
  };

  const handleFeedback = (classes, feedback) => {
    const form = classes.target;
    fetch(`http://localhost:5000/manageClass/feedback/${classes._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feedback }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Feedback submitted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const [feedback, setFeedback] = useState("");
  return (
    <div className="w-full mx-auto">
      <Helmet>
        <title>EduLight | Manage classes</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4 text-center">
        Total Classes: {manageClass.length}
      </h3>

      <div className="overflow-x-auto md:ps-12">
        <table className="table table-zebra w-full bg-purple-50 text-center">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Status</th>
              <th>feedback</th>
            </tr>
          </thead>
          <tbody>
            {manageClass.map((classes, index) => (
              <tr key={classes._id}>
                <th>{index + 1}</th>
                <td>{classes.classesName}</td>
                <td>{classes.email}</td>

                <td>
                  <button
                    onClick={() => handleApproveClass(classes)}
                    className="btn btn-sm btn-ghost bg-purple-900 text-xs text-white hover:text-slate-900"
                    disabled={classes.status === "approve"}
                  >
                    Approve
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => handleDenyClass(classes)}
                    className="btn btn-sm btn-ghost bg-purple-900 text-xs text-white hover:text-slate-900"
                    disabled={classes.status === "deny"}
                  >
                    Deny
                  </button>
                </td>
                <td>
                  <form>
                    <textarea
                      className="textarea border-2 border-opacity-50 border-purple-700"
                      placeholder="Feedback"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>
                  </form>
                </td>
                <td>
                  <button
                    onClick={() => handleFeedback(classes, feedback)}
                    className="btn btn-sm btn-ghost bg-purple-900 text-xs text-white hover:text-slate-900"
                  >
                    Send
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

export default ManageClasses;
