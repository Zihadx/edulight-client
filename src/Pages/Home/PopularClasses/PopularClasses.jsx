import { useEffect, useState } from "react";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const [popularClass, setPopularClass] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/popularClasses")
      .then((res) => res.json())
      .then((data) => setPopularClass(data.slice(0, 6)));
  }, []);
  return (
    <div>
    <div className="text-center mt-8">
      <h3 className="text-5xl font-bold mb-4">Popular Classes</h3>
      <div className="divider w-1/2 mx-auto"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
      {popularClass.map((popularClass) => (
        <PopularClassesCard
          key={popularClass._id}
          popularClass={popularClass}
        ></PopularClassesCard>
      ))}
    </div>
  </div>
  );
};

export default PopularClasses;
