/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectedClass from "../../Hooks/useSelectedClass";

const ClassesCard = ({ allClass }) => {
  const {
    classesName,
    classesImage,
    availableSeats,
    price,
    instructorName,
    _id,
  } = allClass;

  const { user } = useContext(AuthContext);
  const [, refetch] = useSelectedClass();
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log(refetch)

  const handleSelectedClass = (allClass) => {
    if (user && user.email) {
      const selectedClasses = {
        classId: _id,
        classesName,
        classesImage,
        price,
        email: user.email,
      };
      fetch("https://edu-light-server.vercel.app/selectedClass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClasses),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Class has been selected.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to Select Class?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  // card bg-base-100 shadow-xl  mt-8
  return (
    <div
      className={`card bg-base-100 shadow-xl mt-8 ${
        availableSeats === 0 ? "bg-red-600 text-gray-200" : ""
      }`}
    >
      <figure>
        <img src={classesImage} alt="Shoes" className="h-48 w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Instructor: {allClass.instructorName}</h2>
        <h2 className="card-title">{allClass.classesName}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <button
            onClick={() => handleSelectedClass(allClass)}
            className={`btn btn-ghost bg-purple-900 text-white hover:text-slate-900 ${
              availableSeats === 0 ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={availableSeats === 0}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
