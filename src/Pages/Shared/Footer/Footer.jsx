import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-slate-500 text-neutral-content mt-12 flex justify-between items-center">
      <div>
        <h2 className="text-3xl font-bold text-purple-900">EduLight</h2>
        <h3 className="text-lg font-semibold mb-4">Join our community</h3>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
            <button className="btn btn-ghost bg-purple-900 text-white hover:text-slate-900">
              submit
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col text-base space-y-4">
          <a>
            New courses
          </a>
          <a>
            Online batch
          </a>
          <a>
            Mentor
          </a>
          <a>
            Premium
          </a>
        </div>
      </div>
      <div className="text-center">
        <h2 className="footer-title">Social Contact</h2>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <a>
            <FaTwitter></FaTwitter>
          </a>
          <a>
            <FaYoutube></FaYoutube>
          </a>
          <a>
            <FaFacebook></FaFacebook>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
