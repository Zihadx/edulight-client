import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const EnrolledClass = () => {
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://edu-light-server.vercel.app/enrolledClass?email=${user?.email}`)
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
