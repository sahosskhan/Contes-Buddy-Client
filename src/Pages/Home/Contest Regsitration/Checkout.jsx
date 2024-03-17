import { useLoaderData } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutCard from "./CheckoutCard";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Checkout = () => {
    const data = useLoaderData();
    console.log(data);
  const {nameContest, imageContest, price, yourName, yourEmail}= data;
    return (
        <div className="">
        <div className="min-h-screen flex  flex-col justify-center items-center">
<div className=" flex lg:w-1/2 md:w-1/2 w-full flex-col justify-start items-start text-red-500  px-20 py-10 bg-red-50 ">
<div className='text-2xl font-semibold flex lg:flex-row md:flex-col flex-col justify-center items-center gap-2'>
<img className='rounded h-10'alt='Avatar' src={imageContest}/>
<div>{nameContest}</div>
</div>
<p className="text-xl font-semibold my-2">
<i className="fa-solid fa-ticket"></i> Registration Fee:
  <span className="text-bold  text-gray-600"> {price} $</span>
</p>
<p className="text-xl font-semibold my-2">
<i className="fa-solid fa-file-signature"></i> Participant Name:
  <span className="text-bold  text-green-500"> {yourName}</span>
</p>
<p className="text-xl font-semibold my-2">
<i className="fa-solid fa-envelope"></i> Participant Email:
  <span className="text-bold  text-green-500"> {yourEmail}</span>
</p>
</div>
<div className="lg:w-1/2 md:w-1/2 w-full  my-6  border-2 rounded-xl  border-red-50">
  <Elements stripe={stripePromise}>
    <CheckoutCard submission={data} />
  </Elements>
</div>
</div>  
  </div>
    );
};

export default Checkout;