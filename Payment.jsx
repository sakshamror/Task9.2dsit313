import React, { useState } from "react";
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import "./Payment.css"; // Create a CSS file for styling
import { useNavigate } from "react-router-dom";

const CARD_OPTIONS = {
    style: {
      base: {
        iconColor: "#007bff", 
        color: "#333", 
        fontWeight: 600, 
        fontFamily: "Roboto, sans-serif", 
        fontSize: "18px", 
        fontSmoothing: "antialiased",
        "::placeholder": { color: "#87bbfd" }, 
        display: "block", 
      },
      invalid: {
        color: "#ff4444", // Adjusted color for invalid input
      },
    },
    hidePostalCode: true,
    iconStyle: "solid",
  };
  

function PaymentForm() {
    const Navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log(paymentMethod);
      console.log("success");
      alert("Payment Successful")
      Navigate("/")
      setSuccess(true);
    } else {
      console.log(error);
    }
  }

  return (
    <div className="payment-container">
      
        <div className="payment-form">
          <h1>Payment Information</h1>
          <CardElement options={CARD_OPTIONS} className="card-element" />
          <button onClick={handleSubmit} className="pay-button">Pay Now</button>
        </div>
     
    </div>
  );
}

export default PaymentForm;
