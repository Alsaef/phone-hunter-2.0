/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({phone}) => {
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={phone.image}alt=''/></figure>
                <div className="card-body">
                    <h2 className="card-title">{phone.phone_name}!</h2>
                    <p>Brand: {phone.brand}</p>
                    <p className=' font-bold'>Price: {phone.Price}Tk</p>
                    <div className="card-actions justify-end">
                       <Link to={`/chackout/${phone._id}`}> <button className="btn btn-primary">Order Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;