import StripeCheckout from "react-stripe-checkout";
import Img1 from "../src/img/ARmart.png";
import {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KEY =process.env.REACT_APP_STRIPE;

const Pay = () => {
    const [stripeToken,setStripeToken]= useState(null);
    const navigation = useNavigate()
    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(()=> {
         const makeRequest = async () => {
             try{
                 const res = await axios.post("http://localhost:5000/checkout/payment", {
                     tokenId:stripeToken.id,
                     amount : 2000,
                 }
                 );
                 console.log(res.data);
                 navigation("/success");
             } catch(err) {
                 console.log(err);
             }
         };
         stripeToken && makeRequest();
    }, [stripeToken]);
    return (
        <div
          style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
          }}
        > 
        {stripeToken ? (<span>Processing. Please wait...</span>) : (
        <StripeCheckout name="AR Mart"
        image={Img1}
        billingAddress
        shippingAddress
        description= "Your total is $10"
        amount={1000}
        token={onToken}
        stripeKey={KEY}
        >
            <button
              style={{
                  border: "none",
                  width: 120,
                  borderRadius: 5,
                  padding: "20px",
                  backgroundColor: "black",
                  color:"white",
                  fontWeight: "600",
                  cursor:"pointer",
              }}
            >
               Pay Now
            </button>
            </StripeCheckout>
        )}

        </div>
    )
}

export default Pay
