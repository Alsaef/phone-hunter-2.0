// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
const Contect = () => {
  const [state, handleSubmit] = useForm("mgejedwd");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
    return (
        <div className='lg:mx-auto lg:w-1/2'>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-2">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <fieldset>
          <legend className="text-gray-700 font-medium">Personal Information</legend>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Your Name"
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
              placeholder="Your Email"
              required
            />
          </div>
        </fieldset>

        {/* Message Section */}
        <fieldset>
          <legend className="text-gray-700 font-medium">Message</legend>

          {/* Subject Field */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Subject"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Your Message"
              rows="4"
              required
            />
          </div>
        </fieldset>

        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Contect;