import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({post}) => {

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item Added to Cart")
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item Removed from Cart");
    }



    return (
        <div className=" w-[300px] h-[70vh] flex flex-col items-center justify-between 
        hover:scale-110 transition duration-100 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <div>

                <p>{post.title.split(" ").slice(0, 3).join(" ") + "..."}</p>
            </div>

            <div>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>

            <div className="h-[180px]">
                <img src={post.image} className="h-full  " />
            </div>
            <div className="flex w-full justify-between">

                <div>
                    <p className="text-green-600 font-semibold">${post.price}</p>
                </div>

                {
                    cart.some((p) => p.id === post.id) ?
                        (<button
                            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                              text-[12px] p-1 px-3 uppercase 
                             hover:bg-gray-700
                           hover:text-white transition duration-300 ease-in"
                            onClick={removeFromCart}>
                            Remove Item
                        </button>) :
                        (<button
                            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                              text-[12px] p-1 px-3 uppercase 
                                hover:bg-gray-700
                              hover:text-white transition duration-300 ease-in"
                            onClick={addToCart}>
                            Add to Cart
                        </button>)
                }


            </div>




        </div>
    );
};


export default Product