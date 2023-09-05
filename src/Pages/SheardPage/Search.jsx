/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Search = ({phones,setPhones}) => {
    
   const handelSearch=(event)=>{
    event.preventDefault();

    const search = event.target.search.value;
    console.log(search)

    const remaning= phones.filter(phone => phone.phone_name.toLowerCase().includes(search))
    setPhones(remaning)
   }
    return (
        <form onSubmit={handelSearch}>
             <div className="flex items-center justify-center mb-4">
      <div className="relative">
        <input
        name='search'
          type="text"
          className="bg-gray-100 border-2 border-gray-300 rounded-full w-64 px-4 py-2 pl-10 placeholder-gray-500 focus:outline-none focus:ring focus:ring-indigo-300"
          placeholder="Search..."
        />
        <span className="absolute left-3 top-2 text-gray-500">
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
      <div className='ps-2'>
      <button  className="btn  btn-circle btn-primary">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
      </div>
    </div>
        </form>
    );
};

export default Search;