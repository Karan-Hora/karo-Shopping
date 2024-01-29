import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CartItem from "../componenets/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  

  return (
    <div >
      {cart.length > 0 ? (
        <div className="flex gap-3 w-full">
          <div className=" w-8/12  flex flex-wrap">
            {cart.map((item,index) => {
              return <CartItem item={item} key={index} />;
            })}
          </div>

          <div className=" flex flex-col  justify-center" >
            <div>
              <div className=" text-5xl font-sans font-bold">Your Cart</div>
              <div className="text-3xl font-semibold text-green-400">Summary</div>
              <p>
                <span className="font-bold text-2xl font-serif">Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p className="font-bold text-2xl font-serif">Total Amount:${totalAmount}</p>
              <button  className="font-bold text-3xl">
                
                CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen ">
          <p className=" text-4xl font-serif font-bold mb-60 text-red-600"> Cart Empty </p>
          <Link to={"/"}>
            <button className=" text-5xl font-mono border-4 border-solid border-green-500 rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]" >Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Cart;
