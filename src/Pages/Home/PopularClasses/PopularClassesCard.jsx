/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProviders";
import useSelectedClass from "../../../Hooks/useSelectedClass";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";
import { motion } from "framer-motion";

const PopularClassesCard = ({ popularClass }) => {
  const {
    classesName,
    classesImage,
    availableSeats,
    price,
    instructorName,
    _id,
  } = popularClass;

  const { user } = useContext(AuthContext);
  const [, refetch] = useSelectedClass();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const handleSelectedClass = (popularClass) => {
    if (user && user.email) {
      const selectedClasses = {
        classId: _id,
        classesName,
        classesImage,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/selectedClass", {
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
  return (
    <motion.div
      className={`card bg-base-100 shadow-xl  ${
        availableSeats === 0 ? "bg-red-600 text-gray-200" : ""
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 5 }}
    >
      <figure>
        <img src={classesImage} alt="Shoes" className="h-48 w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Instructor: {instructorName}</h2>
        <h2 className="card-title">{classesName}</h2>
        <p>Price: ${price}</p>
        <p>Available Seats: {availableSeats}</p>
        <div className="card-actions">
          <button
            onClick={() => handleSelectedClass(popularClass)}
            className={`btn btn-ghost bg-purple-900 text-white hover:text-slate-900 ${
              availableSeats === 0 || isAdmin || isInstructor
                ? "opacity-70 cursor-not-allowed"
                : ""
            }`}
            disabled={availableSeats === 0 || isAdmin || isInstructor}
          >
            Select
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularClassesCard;
