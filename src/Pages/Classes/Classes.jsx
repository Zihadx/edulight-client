import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ClassesCard from "./ClassesCard";
import { motion } from "framer-motion";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instrucClasses")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>EduLight | Classes</title>
      </Helmet>
      <div className="hero h-[600px] bg-img">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content bg-purple-900 bg-opacity-40 px-8 py-4 md:px-20 md:py-10 mt-16 rounded-lg ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Classes</h1>
            <p className="mb-5">
              This title emphasizes the enriching nature of our classes and
              highlights the expertise of our instructors. It conveys the
              message that our classes are designed to provide an engaging and
              immersive learning experience.
            </p>
            <button className="btn btn-ghost bg-purple-900 ">About us</button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <h3 className="text-5xl font-bold mb-4">Classes</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit neque
          inventore, <br /> quisquam dolorum quasi accusantium suscipit tempore
          laboriosam <br /> quod dolorem.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {classes.map((allClass) => (
          <ClassesCard
            key={allClass.availableSeats}
            allClass={allClass}
          ></ClassesCard>
        ))}
      </div>
    </motion.div>
  );
};

export default Classes;
