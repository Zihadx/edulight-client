import { FaTrashAlt } from "react-icons/fa";
import useSelectedClass from "../../../Hooks/useSelectedClass";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const MySelectedClass = () => {
  const [selectedClass, refetch] = useSelectedClass();
  const total = parseFloat(
    selectedClass.reduce((sum, classes) => classes.price + sum, 0)
  ).toFixed(2);

  const handleDelete = (classes) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectedClass/${classes._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full md:ps-16">
      <Helmet>
        <title>EduLight | Selected classes</title>
      </Helmet>
      <div className="uppercase  h-[80px] font-semibold md:flex items-center justify-between gap-8 mb-8 mt-4 text-center">
        <h3 className="text-3xl">
          My selected classes: {selectedClass.length}
        </h3>
        <h3 className="text-3xl my-4">Total Prices: ${total}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full bg-purple-50 text-center mt-8">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Go</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClass.map((classes, index) => (
              <tr key={classes._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={classes.classesImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{classes.classesName}</td>
                <td>{classes.price}</td>
                <td>
                  <Link to={`/dashboard/payment/${classes._id}`}>
                    <button className="btn btn-sm btn-ghost bg-purple-900 text-white hover:text-slate-900">
                      Pay
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(classes)}
                    className="btn btn-ghost text-red-600 btn-sm text-lg"
                  >
                    <FaTrashAlt></FaTrashAlt>
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

export default MySelectedClass;
