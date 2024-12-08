import { useContext, useRef, useState } from "react";
import logo from "../assets/ChillGame.png";
import google from "../assets/google.png";
import { AuthContext } from "../authprovider/AuthProvider";
import {GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../components/firebase_int";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
const Login = () => {
  const {setForgetEmail
  } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const { state } = useLocation();
  console.log(state)
  const emailRef = useRef()
  const navigate = useNavigate();
  const {SignIn} = useContext(AuthContext)
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    SignIn(email, password)
      .then((result) => {
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
        navigate(state ? state : "/");
      })
      .catch((error) => {
        console.log(error)
      });
  };
  const handleForgetEmail=()=>{
    const email = emailRef.current.value
    setForgetEmail(email)
    console.log("Hellow Click porche")
    navigate("/forgetpassword")
  }
  return (
    <div className="my-20">
      <div className="card mx-auto bg-blue-50 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignIn} className="card-body">
          <div className="mx-auto">
            <img className="w-40 h-full" src={logo} alt="" />
          </div>
          <p className="text-xl text-center font-semibold text-[#ac52b4]">
            Sign in to your a account
          </p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input ref={emailRef}
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input 
              type={showPassword?'text':'password'}
              name="password"
              placeholder="password"
              className="input pr-8 input-bordered"
              required
            /> 
             <label onClick={handleForgetEmail} className="label cursor-pointer">
              <a href="#" className="label-text-alt link link-hover">
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
            <button className="btn  text-white bg-[#16234d]">Login</button>
          </div>
          <div className="divider">Or</div>
          <button onClick={handleGoogle} className="btn bg-blue-50 border-solid border-[#435693] flex justify-between items-center">
            <img className="w-8" src={google} alt="" />
            <p>Sign in with Google</p> <div></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
