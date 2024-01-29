import React from "react";
import { FcDeleteDatabase } from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";
const CartItem = ({ item }) => {

const dispatch=useDispatch();

const removeFromCart = ()=>{
    dispatch(remove(item.id));
    
    toast.success("Item Removed")
}
    return (

        <div >

            <div className=" w-60 h-80 object-cover  flex flex-col  items-center   hover:scale-110 transition duration-100 ease-in p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">

                <div className=" h-[180px] object-fill ">
                    <img src={item.image}  className="h-full   " />
                </div>
                <div>
                    <p className=" font-sans font-bold" >{item.title.split(" ").slice(0,3).join(" ")}</p>
                    <p className="  text-gray-400 font-normal"> {item.description.split(" ").slice(0,8).join(" ") + "..."}</p>
                </div>
                <div className=" flex gap-28">
                    <p className="text-green-600 font-semibold">${item.price}</p>
                    <div onClick={removeFromCart} className=" text-3xl">
                        <FcDeleteDatabase />
                    </div>
                </div>

            </div>

        </div>
    )
}
export default CartItem;