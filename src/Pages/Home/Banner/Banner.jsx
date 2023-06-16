
import image1 from "../../../assets/banner/banner33.jpg";
import image3 from "../../../assets/banner/banner44.jpg";
import image2 from "../../../assets/banner/banner55.jpg";
import image4 from "../../../assets/banner/banner1.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full h-[400px] md:h-[740px]">
    <div id="slide1" className="carousel-item relative w-full">
      <img src={image1} className="w-full h-full " />
      <div className="absolute flex items-center h-full left-0 right-5 top-0 bg-gradient-to-r from-[#1f001f] to-[rgba(21, 21, 21, 0)] bg-opacity-50">
        <div className="text-white space-y-7 pl-8 md:pl-24">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
         Browse thousand<br /> of top-notch <br /> classes
          </h1>
          <p>
            we have a lot of awesome classes teach by experienced <br /> with more than five years in the industry.
          </p>
          <div>
            <button className="btn btn-ghost bg-purple-900 text-white hover:text-slate-900">
             Learn more!
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle mr-5 btn-ghost bg-purple-900 text-white hover:text-slate-900">
          ❮
        </a>
        <a href="#slide2" className="btn btn-ghost bg-purple-900 text-white hover:text-slate-900 btn-circle">
          ❯
        </a>
      </div>
    </div>

    <div id="slide2" className="carousel-item relative w-full">
    <img src={image2} className="w-full h-full " />
      <div className="absolute flex items-center h-full left-0 right-5 top-0 bg-gradient-to-r from-[#1f001f] to-[rgba(21, 21, 21, 0)] bg-opacity-50">
        <div className="text-white space-y-7 pl-8 md:pl-24">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
         Browse thousand<br /> of top-notch <br /> classes
          </h1>
          <p>
            we have a lot of awesome classes teach by experienced <br /> with more than five years in the industry.
          </p>
          <div>
            <button className="btn btn-ghost bg-purple-900 text-white hover:text-slate-900">
             Learn more!
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle mr-5 btn-ghost bg-purple-900 text-white hover:text-slate-900">
          ❮
        </a>
        <a href="#slide3" className="btn btn-ghost bg-purple-900 text-white hover:text-slate-900 btn-circle">
          ❯
        </a>
      </div>
    </div>

    <div id="slide3" className="carousel-item relative w-full">
    <img src={image3} className="w-full h-full " />
      <div className="absolute flex items-center h-full left-0 right-5 top-0 bg-gradient-to-r from-[#1f001f] to-[rgba(21, 21, 21, 0)] bg-opacity-50">
        <div className="text-white space-y-7 pl-8 md:pl-24">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
         Browse thousand<br /> of top-notch <br /> classes
          </h1>
          <p>
            we have a lot of awesome classes teach by experienced <br /> with more than five years in the industry.
          </p>
          <div>
            <button className="btn btn-ghost bg-purple-900 text-white hover:text-slate-900">
             Learn more!
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle mr-5 btn-ghost bg-purple-900 text-white hover:text-slate-900">
          ❮
        </a>
        <a href="#slide4" className="btn btn-ghost bg-purple-900 text-white hover:text-slate-900 btn-circle">
          ❯
        </a>
      </div>
    </div>

    <div id="slide4" className="carousel-item relative w-full">
    <img src={image4} className="w-full h-full " />
      <div className="absolute flex items-center h-full left-0 right-5 top-0 bg-gradient-to-r from-[#1f001f] to-[rgba(21, 21, 21, 0)] bg-opacity-50">
        <div className="text-white space-y-7 pl-8 md:pl-24">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
         Browse thousand<br /> of top-notch <br /> classes
          </h1>
          <p>
            we have a lot of awesome classes teach by experienced <br /> with more than five years in the industry.
          </p>
          <div>
            <button className="btn btn-ghost bg-purple-900 text-white hover:text-slate-900">
             Learn more!
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle mr-5 btn-ghost bg-purple-900 text-white hover:text-slate-900">
          ❮
        </a>
        <a href="#slide1" className="btn btn-ghost bg-purple-900 text-white hover:text-slate-900 btn-circle">
          ❯
        </a>
      </div>
    </div>
  </div>
  );
};

export default Banner;
