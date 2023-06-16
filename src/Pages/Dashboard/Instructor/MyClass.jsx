import { Helmet } from "react-helmet-async";
import useMyClasses from "../../../Hooks/useMyClasses";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyClass = () => {
  const [myClass] = useMyClasses();
  return (
    <div className="w-full md:ps-16">
      <Helmet>
        <title>EduLight | My classes</title>
      </Helmet>
      <div className="uppercase  h-[80px] font-semibold md:flex items-center justify-between gap-8 mb-8 mt-4 text-center">
        <h3 className="text-3xl">My classes: {myClass.length}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full bg-purple-50 text-center mt-8">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Total enrolled</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myClass.map((classes, index) => (
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
                <td>{myClass.length}</td>
                <td>
                  {/* classes.status */}
                  <p className="text-green-500">approved</p>
                </td>
                <td>
                  <Link className="btn btn-ghost text-purple-500 btn-sm text-lg">
                    <FaEdit></FaEdit>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
