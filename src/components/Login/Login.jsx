import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // You can handle form submission here, e.g., send data to an API
        console.log(name,email,password);
      };


    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-6">Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Password</label>
              <input
                type="password"
                name="password"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
              Sign Up
            </button>        
          </form>
          <Link to='/signup'>Don't have account? <span className="text-blue-600">Sign Up</span></Link>
            <SocialLogin></SocialLogin>
        </div>
      </div>
    );
};

export default Login;