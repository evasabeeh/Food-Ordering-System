import React from "react";
import { useContext } from "react";
import { StoreContext } from "../StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount = () => { }, url = "" } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart p-4 md:p-8">

      <div className="cart-items space-y-4">
        <div className="cart-items-title grid grid-cols-6 font-semibold text-ternary text-sm md:text-base">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="my-2" />
        {food_list.map((item, index) => {
          if (cartItems?.[item._id] > 0) {
            return (
              <div key={item._id + index}>
                <div className="cart-items-item grid grid-cols-6 items-center gap-4 text-sm md:text-base">
                  <img
                    src={`${url}/images/${item.image}`}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <p>{item.name}</p>
                  <p>Rs. {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs. {item.price * cartItems?.[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="text-secondary cursor-pointer font-bold"
                  >
                    x
                  </p>
                </div>
                <hr className="my-2" />
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom flex flex-col lg:flex-row gap-8">

        <div className="cart-total w-full lg:w-1/2 bg-white shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.55)] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-ternary">Cart Total</h2>
          <div className="mt-4 space-y-4">
            <div className="cart-total-details flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p>Rs. {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details flex justify-between text-gray-700">
              <p>Delivery Fee</p>
              <p>Rs. {getTotalCartAmount() === 0 ? 0 : 60}</p>
            </div>
            <hr />
            <div className="cart-total-details flex justify-between text-ternary">
              <b>Total</b>
              <b>
                Rs. {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 60}
              </b>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="w-full mt-4 bg-secondary text-white py-2 px-4 rounded-md"
          >
            Proceed to Checkout
          </button>
        </div>

        <div className="cart-promocode w-full lg:w-1/2 shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.55)] p-6 rounded-lg">
          <p className="text-ternary">If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input mt-4 flex gap-4">
            <input
              type="text"
              placeholder="Promo Code"
              className="flex-1 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-secondary w-full sm:w-auto"
            />
            <button className="bg-secondary text-white py-2 px-4 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
