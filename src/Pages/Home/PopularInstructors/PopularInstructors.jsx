import { useEffect, useState } from "react";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);
  useEffect(() => {
    fetch("https://edu-light-server.vercel.app/instrucClasses")
      .then((res) => res.json())
      .then((data) => setPopularInstructors(data.slice(0, 6)));
  }, []);
  return (
    <div>
      <div className="text-center mt-12">
        <h3 className="text-5xl font-bold mb-4">Popular Instructors</h3>
        <div className="divider w-1/2 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
        {popularInstructors.map((popularInstructor) => (
          <PopularInstructorCard
            key={popularInstructor._id}
            popularInstructor={popularInstructor}
          ></PopularInstructorCard>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
