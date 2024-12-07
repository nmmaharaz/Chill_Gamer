import { useContext } from "react";
import logo from "../assets/ChillGame.png";
import google from "../assets/google.png";
import { AuthContext } from "../authprovider/AuthProvider";
import {GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../components/firebase_int";
const Login = () => {
  const {SignIn} = useContext(AuthContext)
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    SignIn(email, password)
      .then((result) => {
        console.log("Hellow Dost Ki Obostha?");
      })
      .catch((error) => {
        console.log("mama eto error khaccho keno?");
      });
  };

  const provider = new GoogleAuthProvider()
  const GoogleSignIn = ()=>{
    signInWithPopup(auth, provider)
    .then((result)=>{
      console.log("Hellow Mama vlo aCho?")
    })
    .catch((error)=>{
      console.log("Error Khaicho keono")
    })
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn  text-white bg-[#16234d]">Login</button>
          </div>
          <div className="divider">Or</div>
          <button onClick={GoogleSignIn} className="btn bg-blue-50 border-solid border-[#435693] flex justify-between items-center">
            <img className="w-8" src={google} alt="" />
            <p>Sign in with Google</p> <div></div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
