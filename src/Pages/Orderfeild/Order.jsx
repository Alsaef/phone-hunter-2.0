// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
const Order = () => {
    const {user}=useContext(AuthContext)
    const phone=useLoaderData()
    console.log(phone)
    const {Price,image,phone_name}=phone;
    const handelOrder=(event)=>{
        event.preventDefault();
        const name = event.target.orderName.value;
        const email = event.target.email.value;
        const price = event.target.price.value;
        const location = event.target.location.value;
        const date = event.target.date.value;
        const NewOrder={
            name,email,price,image,location,date
        }
        console.log(NewOrder)
        fetch('https://phone-hunter-backend-production.up.railway.app/orders',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(NewOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire(
                    'SuccessFul!',
                    'Thank You!',
                    'success'
                  )
            }
        })
    }
    return (
        <div>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-1">
      <h2 className="text-2xl font-semibold mb-4">Order Form</h2>
      <form onSubmit={handelOrder}>
        {/* Order Name Field */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="orderName">
            Order Name
          </label>
          <input
            type="text"
            id="orderName"
            name="orderName"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter Order Name"
            defaultValue={phone_name} readOnly
            required
          />
        </div>

      
        
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter Email"
            defaultValue={user?.email} readOnly
            required
          />
        </div>

        {/* Price Field */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter Price"
            defaultValue={Price+" Tk"} readOnly
            required
          />
        </div>

        {/* Location Field */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter Location"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="location">
            Date
          </label>
          <input
            type="Date"
            id="location"
            name="date"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Date"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Order;