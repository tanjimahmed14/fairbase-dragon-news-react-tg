import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../../Sherd/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const {singIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location,  'hfugeafgcgehgk')

    const handelLogin = e => {
        e.preventDefault();
        const from = new FormData(e.currentTarget);
        const email = from.get('email');
        const password = from.get('password');
        

        singIn(email, password)
        .then(result => {
            console.log(result.user)

            // navigate section
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.error(error);
        })
    }
  return (
    <div>
      <Navber></Navber>
      <div>
        <h1 className="text-center text-4xl font-semibold mt-10 ">
          Please Login
        </h1>
        <div className="card mx-auto mt-7 shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handelLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
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
                placeholder="Password"
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
              <button className="btn btn-primary text-white">Login</button>
            </div>
            <p>Dont’t Have An Account ?<Link to="/regiter" className="text-blue-700 font-semibold ml-1">Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
