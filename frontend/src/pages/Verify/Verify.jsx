import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import './Verify.css'
import { StoreContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';
import axios from "axios";

const Verify = () => {
    const [searchParams, setSeachParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext)
    console.log(success, orderId);
    console.log("This is the URL",url)
    const navigate = useNavigate();

    const verifyPayment= async() =>{
        const response = await axios.post(url+"/api/order/verify",{success, orderId});
        if(response.data.success){
            navigate("/myorders");
            toast.success("Order Placed Successfully");
        }
        else{
            toast.error("Something went wrong");
            navigate("/");
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[]);

  return (
    <div className='verify'>
        <div className="spinner">Verify</div>
    </div>
  )
}

export default Verify