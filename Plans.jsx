// src/components/Plans.jsx
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Plans.css';

const Plans = () => {
  const navigate=useNavigate()
 const onchange=()=>{
  alert("You are already on free plan")
 }
 const handleSelectPlan = (paymentLink) => {
  window.open(paymentLink, '_blank');
  navigate('/')
}


  return (
    <div className='container'>
      <h1>Choose a Plan</h1>
      <div className="plan">
        <h2>Free Plan</h2>
        <p>Details of the Free Plan:</p>
        <ul>
          <li>Video Advertisements</li>
          <li>Basic Analytics</li>
        </ul>
        <button onClick={onchange}>Select Free</button>
      </div>
      <div className="plan">
        <h2>Premium Plan($10)</h2>
        
        <p>Details of the Premium Plan:</p>
        <ul>
          <li>Ad-Free Experience:</li>
          <li>Priority Customer Support:</li>
          <li>Advanced Analytics:</li>
        </ul>
        <button onClick={() => handleSelectPlan('https://buy.stripe.com/test_6oEdS28T0c03aqc6oo')}>Premium</button>
      </div>
    </div>
  );
};

export default Plans;
