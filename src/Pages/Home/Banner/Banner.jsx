import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img3 from "../../../assets/banner/banner33.jpg";
import img4 from "../../../assets/banner/banner44.jpg";
import img5 from "../../../assets/banner/banner55.jpg";
import img1 from "../../../assets/banner/banner1.jpg";
const Banner = () => {
  return (
    <div>
        <Carousel className="text-center">
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
      <div>
        <img src={img1} />
      </div>
    </Carousel>
    </div>
  );
};

export default Banner;
