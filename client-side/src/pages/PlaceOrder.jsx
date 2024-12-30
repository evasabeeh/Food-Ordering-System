import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form
      onSubmit={placeOrder}
      className="place-order flex flex-col lg:flex-row gap-8"
    >
      {/* Delivery Information Card */}
      <div className="place-order-left w-full lg:w-1/2 bg-white shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.55)] p-6 rounded-lg">
        <p className="title text-2xl font-semibold mb-4">Delivery Information</p>
        <div className="multi-fields flex flex-wrap gap-4">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First name"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary w-full sm:w-auto"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last name"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary w-full sm:w-auto"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email address"
          className="w-full p-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
          className="w-full p-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <div className="multi-fields flex flex-wrap gap-4 mt-4">
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary w-full sm:w-auto"
          />
          <input
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary w-full sm:w-auto"
          />
        </div>
        <div className="multi-fields flex flex-wrap gap-4 mt-4">
          <input
            required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip code"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary w-full sm:w-auto"
          />
          <input
            required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="Country"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary w-full sm:w-auto"
          />
        </div>
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone"
          className="w-full p-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>

      {/* Cart Total Card */}
      <div className="place-order-right w-full lg:w-1/2 shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.55)] p-6 rounded-lg">
        <div className="cart-total">
          <h2 className="text-2xl font-semibold mb-4">Cart Total</h2>
          <div className="space-y-4">
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
            <div className="cart-total-details flex justify-between font-semibold text-gray-800">
              <b>Total</b>
              <b>
                Rs. {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 60}
              </b>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-secondary text-white py-2 px-4 rounded-md"
          >
            Proceed to Payment
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="pt-8 object-cover"
            height="250"
            width="250"
            src="placeorder.svg"
            alt="Place Order"
          />
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
