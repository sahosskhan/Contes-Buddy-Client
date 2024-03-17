/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CheckoutCard = ({submission}) => {
    const {price, yourEmail, nameContest,_id,yourName, yourImage,imageContest, creatorName,creatorEmail,creatorImage} = submission;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [fetchError, setFetchError] = useState("");
    const [success, setSuccess] = useState("");
    const [transID, setTransID] = useState("");
  
    useEffect(() => {
      fetch("https://contes-buddy-server.vercel.app/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data?.clientSecret);
        })
        .catch((err) => {
            setFetchError(err.message);
            toast.error(err.message); 
        });
    }, [price]);
  
  const navigate = useNavigate()
  
  const handleSubmit = async (event) => {
      event.preventDefault();
      if (!stripe || !elements) {
        return;
      }
      const card = elements.getElement(CardElement);
      if (card === null) {
        return;
      }
      // eslint-disable-next-line no-unused-vars
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });
  
      if (error) {
        setCardError(error.message);
        toast.error(error.message);
      } else {
        setCardError("");
        //   console.log("[PaymentMethod]", paymentMethod);
      }
      const { paymentIntent, error: paymentError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: nameContest,
              email: yourEmail,
            },
          },
        });
  
      if (paymentError) {
        setCardError(paymentError.message);
        toast.error(error.message);
        return;
      }
      setSuccess("");
      setTransID("");
      if (paymentIntent.status === "succeeded") {
        const payment = {
          payAmount: price,
          transId: paymentIntent.id,
          yourEmail: yourEmail,
          yourName: yourName,
          yourImage: yourImage,
          nameContest,
          imageContest,
          creatorName,creatorEmail,creatorImage,
          id: _id,
        };
        fetch("https://contes-buddy-server.vercel.app/payments", {
          method: "POST",
          headers: {
              "content-type": "application/json",
            },
          body: JSON.stringify(payment),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.acknowledged) {
                const successMessage = `Congrats! Your Payment Received . Your TransID is ${paymentIntent?.id}`;
                toast.success(successMessage);
                setSuccess(successMessage);
                setTransID(paymentIntent?.id);
                Swal.fire({
                    title: "Congrats! Your Payment Received",
                    text: `Your Registration Complete!✅ TransID: ${paymentIntent?.id}`,
                    icon: "success",
                    confirmButtonText: "Done",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/dashboard/my-participated");
                    }
                });
            }
          })
          .catch((err) => {
            toast.error(err.message); 
        });
      }
      console.log(cardError)
      console.log(fetchError)
      console.log(success)
      console.log(transID)
    };
  
    return (
        <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="bg-red-50 text-black w-full rounded-b-none rounded-t-none p-10 rounded-xl"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#000000",
                "::placeholder": {
                  color: "#bdbbbb",
                },
              },
              invalid: {
                color: "#eb1313",
              },
            },
          }}
        />
        <button
          type="submit"
          className="py-2 px-6 bg-red-500 w-full rounded-t-none rounded-xl text-center text-xl text-white "
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
    </div>
    );
};

export default CheckoutCard;