import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import logo from "../assets/ChillGame.png"
const ForgetPassword = () => {
    const {forgetEmail, SignOut, forgetPassword, resetPassword} = useContext(AuthContext)

    const handleLogOut = () =>{
        SignOut()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
      }
    
      const handleForgetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        forgetPassword(email)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
      };
      const handleResetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        resetPassword(email)
        .then(result=>{
            SignOut()
        })
        .catch(error=>{
            SignOut()
        })
      };
    
    
    return (
        <div>
            <div className="flex justify-center mt-7">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        {forgetEmail ? (
          <form onSubmit={handleForgetPassword} className="card-body">
            <p className="text-3xl font-bold text-center text-[#f57f25]">Reset Password</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={forgetEmail}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <Link onClick={handleLogOut} to="https://gmail.com/" target="_blank" className="btn text-white bg-[#f57f25]">Reset</Link>
            </div>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="card-body">
            <div className="mx-auto">
            <img className="w-40 h-full" src={logo} alt="" />
          </div>
          <p className="text-xl text-center font-semibold text-[#ac52b4]">
          Reset Password
          </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
            <Link onClick={handleLogOut} to="https://gmail.com/" target="_blank" className="btn text-white bg-[#16234d]">Reset</Link>
            </div>
          </form>
        )}
      </div>
    </div>
        </div>
    );
};

export default ForgetPassword;