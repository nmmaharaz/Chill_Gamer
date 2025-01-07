import { useContext, useState } from "react";
import logo from "../assets/ChillGame.png";
import { AuthContext } from "../authprovider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Registration = () => {
  const {SignUp, setUser, UpdateProfile} = useContext(AuthContext)
  const [errormassage, setErrorMassage] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photourl = e.target.photourl.value;
    const password = e.target.password.value;

    if (password.length < 7) {
      setErrorMassage("Must be at least 6 characters");
      return;
    }

    const uperCasePassword = /^(?=.*[A-Z]).+$/;
    if (!uperCasePassword.test(password)) {
      setErrorMassage("Must contain at least 1 in Capital Case");
      return;
    }

    const lowerCasePassword = /^(?=.*[a-z]).+$/;
    if (!lowerCasePassword.test(password)) {
      setErrorMassage("Must contain at least 1 in lower case");
      return;
    }


    SignUp(email, password)
    .then((result)=>{
      const user = result.user
      setUser(user)
      UpdateProfile({displayName:name, photoURL:photourl})
      toast.success("SignUp in Successful",{
        position:"top-center"
      })
      navigate("/");
    })
    .catch((error)=>{
      console.log("mama eto error khaccho keno?")
    })
  };


  return (
    <div className="py-36">
      <div className="card mx-auto bg-blue-50 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignUp} className="card-body">
          <div className="mx-auto">
            <img className="w-40 h-full" src={logo} alt="" />
          </div>
          <p className="text-xl text-center font-semibold text-[#ac52b4]">
            Create your account
          </p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="text"
              placeholder="photoURL"
              name="photourl"
              className="input input-bordered"
              required
            />
          </div>
          <div className="relative form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword?'text':'password'}
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          {showPassword ? <FaEye onClick={()=>setShowPassword(!showPassword)} className="absolute right-3 cursor-pointer top-[63%]" />:<FaEyeSlash onClick={()=>setShowPassword(!showPassword)}  className="absolute right-3 cursor-pointer top-[63%]" />}
          
          </div>
          {errormassage && <p className="text-red-700">{errormassage}</p>}

          <div className="form-control mt-6">
            <button className="btn text-white bg-[#16234d]">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
