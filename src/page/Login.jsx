import { useContext, useRef, useState } from "react";
import logo from "../assets/ChillGame.png";
import google from "../assets/google.png";
import { AuthContext } from "../authprovider/AuthProvider";
import {GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../components/firebase_int";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const Login = () => {
  const {setForgetEmail
  } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const { state } = useLocation();
  const emailRef = useRef()
  const navigate = useNavigate();
  const {SignIn} = useContext(AuthContext)
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    SignIn(email, password)
      .then((result) => {
        toast.success("Login in Successful",{
          position:"top-center"
        })
        navigate(state ? state : "/");
      })
      .catch((error) => {
        Swal.fire({
            title: 'Error!',
            text: 'Incorrect email and password',
            icon: 'error',
            confirmButtonText: 'Try Again'
        })
      });
  };

  const provider = new GoogleAuthProvider();
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Login in Successful",{
          position:"top-center"
        })
        navigate(state ? state : "/");
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Incorrect email and password',
          icon: 'error',
          confirmButtonText: 'Try Again'
      })
      });
  };
  const handleForgetEmail=()=>{
    const email = emailRef.current.value
    setForgetEmail(email)
    navigate("/forgetpassword")
  }
  return (
    <div className="py-36 dark:bg-white bg-black">
      <div className="card mx-auto bg-opacity-20 bg-[#633aa9] shadow-md shadow-gray-700 dark:shadow-gray-400 hover:shadow-[#8750f7] w-full max-w-sm shrink-0 ">
        <form onSubmit={handleSignIn} className="card-body ">
          <div className="mx-auto">
            <img className="w-40 h-full" src={logo} alt="" />
          </div>
          <p className="text-xl text-center text-white dark:text-gray-600 font-semibold ">
            Sign in to your a account
          </p>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white dark:text-gray-600">Email</span>
            </label>
            <input ref={emailRef}
              type="email"
              placeholder="email"
              name="email"
              className="input dark:bg-opacity-5 dark:border-base-200 dark:bg-[#633aa9] bg-black dark:text-white text-white
               input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-white dark:text-gray-600">Password</span>
            </label>
            <input 
              type={showPassword?'text':'password'}
              name="password"
              placeholder="password"
              className="input dark:bg-opacity-5 dark:border-base-200 dark:bg-[#633aa9] bg-black dark:text-white text-white
               pr-8 input-bordered"
              required
            /> 
             <label onClick={handleForgetEmail} className="label cursor-pointer">
              <a href="#" className="label-text-alt text-white dark:text-gray-600 link link-hover">
                Forgot password?
              </a>
            </label>
            {showPassword ? (
              <FaEye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 cursor-pointer top-[45%]"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 cursor-pointer top-[45%]"
              />
            )}
          </div>
          <div className="form-control mt-6">
            <button className="dark:bg-opacity-60 cursor-pointer dark:border-base-200 bg-[#7539d8] shadow-md shadow-gray-700 dark:shadow-gray-400 hover:shadow-[#b097e2] text-white font-semibold px-6 py-2 rounded-3xl">Login</button>
          </div>
          <div className="divider text-white dark:text-gray-600">Or</div>
          <button onClick={handleGoogle} className="btn bg-blue-50 border-solid border-[#435693] flex justify-between items-center">
            <img className="w-8" src={google} alt="" />
            <p className="text-white dark:text-gray-600">Sign in with Google</p> <div></div>
          </button>
          <p className="text-center text-white dark:text-gray-600">
            Don't have an account?{" "}
            <Link to="/registration" className="cursor-pointer text-[#f57f25]">
              SingUp
            </Link>
          </p>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
