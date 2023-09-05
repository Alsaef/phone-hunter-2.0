// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const MyOrder = () => {
  const { user } = useContext(AuthContext)
  const [phones, setPhones] = useState([])
  const url = `https://phone-hunter-backend-production.up.railway.app/orders?email=${user?.email}`
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorize: `Bearer ${localStorage.getItem('hunter')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setPhones(data)
      })
  }, [url])
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
          <tr>
            {
              phones.map(phone => console.log(phone))
            }
            {
              phones.map(phone => <OrderRow phone={phone} key={phone._id} phones={phones} setPhones={setPhones}></OrderRow>)
            }
          </tr>

        </tbody>

      </table>
    </div>
  );
};

export default MyOrder;