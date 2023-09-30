import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
const {signUp,user} = useContext(AuthContext);
const [errorMsg, setErorMsg] = useState('');
const navigat = useNavigate();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // You can handle form submission here, e.g., send data to an API
        if (password.length < 6 ) {
            setErorMsg('Password must be 6 charectar or more!')
        }
        else{
            signUp(email, password)
            .then(() => {
                navigat('/profile')
            })
            .catch(err => {
                console.log(err.message)
                if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
                    setErorMsg("This email address is already used!")
                    e.target.email.value = '';
                    e.target.password.value = '';
                }
            })
        }
    };
    
    console.log(user);
    return (
        
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
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
        {  errorMsg &&
         <p className="text-red-600">{errorMsg}</p>         
        }
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          Sign Up
        </button>        
      </form>
      <Link to='/login'>Already have account? <span className="text-blue-600">Login</span></Link>
        <SocialLogin></SocialLogin>
    </div>
  </div>
);
};

export default SignUp;