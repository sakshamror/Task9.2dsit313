import React from "react";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import {CardElement, Elements, useElements, useStripe} from "@stripe/react-stripe-js"
const PublicKey = "pk_test_51NzPQtSBK2RqovVKGALgkjoM1utE72dYYUCbGo7fONvKSUuPtjmyP8YcJnYbKDkX2nArbyp6nmE0x3Kp1Ln0CKTr00doDcVrRT"
const stripetest = loadStripe(PublicKey)


function PaymentWrap(){
return(
<Elements stripe={ stripetest}>
<Payment />
</Elements>)



}

export default PaymentWrap;