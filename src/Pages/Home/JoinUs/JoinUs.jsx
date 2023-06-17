import { motion } from "framer-motion";
const JoinUs = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between items-center my-8 bg-purple-50 py-4 px-8 rounded-md"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 5 }}
    >
      <div className="md:w-1/2">
        <p className="text-purple-800 font-bold">Join us</p>
        <h2 className="text-5xl font-bold my-4">
          Come join us on this <br /> exciting journey <br /> of EduLight
        </h2>
        <p className="my-4">
          Welcome to our community! We are a passionate and diverse group of
          individuals dedicated to insert purpose or mission. Together, we
          strive to make a <br /> positive impact in relevant field or industry
          and create <br /> meaningful change in the world
        </p>
        <button className="btn btn-ghost bg-purple-900 text-white hover:text-black my-4">
          Join Us
        </button>
      </div>
      <div className="md:w-1/2">
        <img
          className="w-[600px] h-[400px] rounded-2xl"
          src="https://i.ibb.co/SKTfBd6/startae-team-QEsa-Xprg-Vf-Q-unsplash.jpg"
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default JoinUs;
