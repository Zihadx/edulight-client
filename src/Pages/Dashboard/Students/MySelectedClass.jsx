import { FaTrashAlt } from "react-icons/fa";
import useSelectedClass from "../../../Hooks/useSelectedClass";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MySelectedClass = () => {
  const [selectedClass] = useSelectedClass();
  const total = parseFloat(selectedClass.reduce((sum, classes) => classes.price + sum, 0)).toFixed(2);
  return (
    <div className="w-full md:ps-16">
      <Helmet>
        <title>Bistro Boss | Selected classes</title>
      </Helmet>
      <div className="uppercase  h-[80px] font-semibold md:flex items-center justify-between gap-8 mb-8">
        <h3 className="text-3xl">My selected classes: {selectedClass.length}</h3>
        <h3 className="text-3xl my-4">Total Prices: ${total}</h3>
        <Link to="/dashboard/payment">
          <button
            className="btn btn-sm btn-ghost bg-purple-900 text-white hover:text-slate-900"
          >
            Pay
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full bg-slate-50 text-center">
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
                  <button className="btn btn-sm btn-ghost bg-purple-900 text-white hover:text-slate-900">
                    Pay
                  </button>
                </td>
                <td>
                  <button
                    //   onClick={() => handleDelete(classes)}
                    className="btn btn-ghost text-red-600 btn-lg"
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
