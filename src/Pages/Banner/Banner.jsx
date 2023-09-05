// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='mx-auto' style={{width:'95%'}}>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img style={{width:'500px'}} src="https://img.freepik.com/free-psd/full-screen-smartphone-mockup-design_53876-65968.jpg?w=740&t=st=1693590740~exp=1693591340~hmac=d57a500507ea14e6e61b7bfff928418227bb3bffbaa38390ad41e227068d81b5" />
                    <div>
                        <h1 className="text-5xl font-bold">Phone Hunter!</h1>
                        <p className="py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque nobis illo cumque nulla? Labore aut amet laboriosam aspernatur id unde..</p>
                       <Link to='/orders'><button className="btn btn-primary">See Your Order</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;