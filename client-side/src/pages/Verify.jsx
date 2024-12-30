import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../StoreContext';
import axios from 'axios';

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId"); 

    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if(response.data.success){  
            navigate("/myorders");
        }else{
            navigate("/");
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[])

    return (
        <div className="min-h-[60vh] grid">
            <div className="w-24 h-24 border-4 border-gray-400 border-t-4 border-t-red-600 rounded-full animate-spin"></div>
        </div>
  )
}

export default Verify;