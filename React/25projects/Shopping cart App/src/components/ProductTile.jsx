import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cartSlice";

const ProductTile = ({ product }) => {
    const dispatch = useDispatch();
    const {cart} = useSelector(state=> state);

    function handleToCart(){
        dispatch(addToCart(product));
    }
    function handleRemoveToCart(){
        dispatch(removeFromCart(product.id));
    }
  return (
    <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-5 ml-5 rounded-xl">
      <div className="h-[180px]">
        <img src={product?.image} alt="Product-image" className="object-cover h-full w-full " />
        
      </div>
      <div>
        <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">{product.title}</h1>
      </div>
      <div className=" flex items-center justify-center w-full mt-5">
         <button onClick={  cart.some(item => item.id === product.id)? handleRemoveToCart : handleToCart} className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
            {
                cart.some(item => item.id === product.id ) ? 'Romve from cart' : 'Add to cart'
            } </button>
      </div>
    </div>
  );
};

export default ProductTile;
