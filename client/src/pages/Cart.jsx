import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const [totalAmt, setTotalAmt]= useState("")
  const [payNow, setPayNow] = useState(false);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  // console.log(productData);
   // for remove product when user click on X botton
   const dispatch = useDispatch();
   useEffect(()=>{
    let price=0;
    productData.map((item)=>{
      price+=item.price * item.quantity;
      return price
    })
    // console.log(price);
    setTotalAmt(price)
   },[productData])

    // handlechekout function
  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };
   //  connect backed here 
   const payment = async(token)=>{
    await axios.post("http://localhost:8000/pay", {
     amount: totalAmt * 100,
     token: token,
    })
   }
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://i.pinimg.com/originals/5a/7f/1e/5a7f1eff255d5e1d91e542d67c8be256.jpg"
        alt="waterimg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItems />
        <div className="w-1/3 bg-[#eef0f2] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal
              <span className="font-titleFont font-bold text-lg">${totalAmt}</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
                distinctio!
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold">${totalAmt}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            proceed to checkout
          </button>
          {/* payment checkout */}
          {
            payNow &&  <div className="w-full mt-6 flex items-center justify-center">
            <StripeCheckout
              stripeKey="pk_test_51N97lNSGm04i0ekns8zkQVLj43gy67skp3LYq2X1xo13qIiYA6gl9xzgZcZN0JwuVLTfRFQzN2j85uiK9hiUGhLi00DZBcJCD1"
              name="Bharat Bazar online shopping"
              amount={totalAmt * 100}
              label="Pay to bazar"
              description={`Your Payment amount is $ ${totalAmt}`}
              token={payment}
              email={userInfo.email}
            />
          </div>
          }
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
