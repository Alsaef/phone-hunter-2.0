// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Search from '../SheardPage/Search';

const Products = () => {
    const [phones,setPhones]=useState([])
    useEffect(()=>{
        fetch('https://phone-hunter-backend-production.up.railway.app/phones')
        .then(res =>res.json())
        .then(data =>setPhones(data))
    },[])
    return (
        <div>
            <h2 className=' text-center text-4xl font-bold text-primary mb-5'>Phones</h2>
            <Search phones={phones} setPhones={setPhones}></Search>
            <div className=' grid lg:grid-cols-3 grid-cols-1 gap-6'>
                {
                    phones.map(phone=> console.log(phone))
                }
                {
                    phones.map(phone=> <ProductCard key={phone._id} phone={phone}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;