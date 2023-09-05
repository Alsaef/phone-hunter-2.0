// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
  const {singin}=useContext(AuthContext)
  const navigate=useNavigate()
    let location = useLocation();
    const from=location.state?.from?.pathname||'/'
  const Handellogin = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Access form data using event.target
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password)

    singin(email,password)
    .then((userCredential)=>{
        const user = userCredential.user;
        const loggedUser={
          email:user.email
        }
        console.log(loggedUser)
      
        fetch('https://phone-hunter-backend-production.up.railway.app/jwt',{
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(loggedUser)
        })
        .then(res=>res.json())
        .then(data => {
          console.log(data)
          localStorage.setItem('hunter',data.token)
          navigate(from ,{replace:true})
        })
    })
    .catch((error)=>{
          console.log(error)
    })

}
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Log in</h2>
        <form onSubmit={Handellogin} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full pl-10 pr-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="you@example.com"
              />
              <span className="absolute top-3 left-3 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                className="w-full pl-10 pr-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
                placeholder="Password"
              />
              <span className="absolute top-3 left-3 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg w-full transition duration-300 ease-in-out"
            type="submit"
          >
            Log in
          </button>
        </form>
        <p>Create New Account? <Link className='text-primary' to='/register'>Register</Link></p>
      </div>
    </div>
    );
};

export default Login;