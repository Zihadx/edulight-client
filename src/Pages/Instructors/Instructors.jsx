import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Instructors.css";
import InstructorsCard from "./InstructorsCard";
import { motion } from "framer-motion";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://edu-light-server.vercel.app/instrucClasses")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>EduLight | Instructors</title>
      </Helmet>
      <div className="hero h-[600px] bg-image bg-fixed">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content bg-purple-900 bg-opacity-40 px-8 py-4 md:px-20 md:py-10 mt-16 rounded-lg ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Instructor</h1>
            <p className="mb-5">
              This title highlights the expertise and knowledge of our
              instructors, emphasizing their role as mentors who can help
              learners master various skills.
            </p>
            <button className="btn btn-ghost bg-purple-900 ">About us</button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <h3 className="text-5xl font-bold mb-4">Instructors</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit neque
          inventore, <br /> quisquam dolorum quasi accusantium suscipit tempore
          laboriosam <br /> quod dolorem.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {instructors.map((instructor) => (
          <InstructorsCard
            key={instructor.availableSeats}
            instructor={instructor}
          ></InstructorsCard>
        ))}
      </div>
    </motion.div>
  );
};

export default Instructors;
