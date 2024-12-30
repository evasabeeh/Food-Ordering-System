import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Orders = ({ url }) => {
  
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error fetching orders");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-2xl font-semibold text-ternary mb-6">Orders Page</h3>
      <div className="order-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order, index) => (
          <div key={index} className="order-item bg-white shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.55)] rounded-lg p-6 flex flex-col justify-between">
            <div className="flex items-center mb-4">
              <img src={assets.parcel_icon} alt="Parcel Icon" className="w-12 h-12 mr-4" />
              <div>
                <p className="order-item-food text-gray-700 font-medium">
                  {order.items.map((item, index) => (
                    <span key={index}>
                      {item.name} x {item.quantity}
                      {index < order.items.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                <p className="order-item-name text-gray-700">
                  {order.address.firstName} {order.address.lastName}
                </p>
                <div className="order-item-address text-gray-500">
                  <p>{order.address.street},</p>
                  <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                </div>
                <p className="order-item-phone text-gray-500">{order.address.phone}</p>
              </div>
            </div>
            <div className="order-item-details flex justify-between items-center mt-4">
              <p className="text-gray-700 font-semibold">Items: {order.items.length}</p>
              <p className="text-gray-700 font-semibold">Rs. {order.amount}</p>
            </div>
            <div className="order-item-status mt-4">
              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
                className="border border-gray-300 rounded-md px-4 py-2 w-full bg-white text-gray-700"
              >
                <option value="Food Processing">Food processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
