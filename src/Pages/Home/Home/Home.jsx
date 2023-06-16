import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import JoinUs from "../JoinUs/JoinUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EduLight | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <JoinUs></JoinUs>
    </div>
  );
};

export default Home;
