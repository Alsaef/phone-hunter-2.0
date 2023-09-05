// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const {singUp}=useContext(AuthContext)
    const navigate=useNavigate()
    let location = useLocation();
    const from=location.state?.from?.pathname||'/'
    const HandelRegister = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Access form data using event.target
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name,email,password)

        singUp(email,password)
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
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-center text-gray-800">Create an Account</h2>
                    <form onSubmit={HandelRegister} className="mt-6">
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
                                placeholder="Password"
                            />
                        </div>

                        <button
                            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg w-full transition duration-300 ease-in-out"
                            type="submit"
                        >
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;