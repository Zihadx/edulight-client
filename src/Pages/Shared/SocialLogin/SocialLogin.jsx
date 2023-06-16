import { useLocation, useNavigate } from "react-router-dom";
import google from "../../../assets/social logo/google.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { googleSignIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;

      const storeUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("https://edu-light-server.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(storeUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleGoogleSignIn}
          className="px-3 py-2 border flex justify-center items-center gap-4 btn btn-ghost bg-slate-100"
        >
          <img className="h-8 w-8" src={google} alt="" /> Continue with google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
