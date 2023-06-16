import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const EnrolledClass = () => {
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/enrolledClass?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setEnrolledClasses(data));
  }, [user]);
  return (
    <div>
      <h3>enrol class {enrolledClasses.length}</h3>
    </div>
  );
};

export default EnrolledClass;
