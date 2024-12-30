import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../StoreContext";
import axios from "axios";
import { Package } from "lucide-react";

const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(
            url + "/api/order/userorders",
            {},
            { headers: { token } }
        );
        setData(response.data.data);
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return (
        <div className="my-orders py-8 px-6 my-8">
            <h2 className="text-ternary font-bold text-2xl mb-4">My Orders</h2>
            <div className="container grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data.map((order, index) => (
                    <div
                        key={index}
                        className="my-orders-order p-4 border border-gray-300 rounded-lg shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.55)] bg-white flex flex-col gap-4"
                    >
                        <div className="flex items-center gap-2">
                            <Package className="text-primary w-6 h-6" alt="Parcel Icon" />
                            <p className="text-gray-700 font-medium">
                                {order.items?.map((item, idx) =>
                                    idx === order.items.length - 1
                                        ? `${item.name} x ${item.quantity}`
                                        : `${item.name} x ${item.quantity}, `
                                )}
                            </p>
                        </div>
                        <p className="text-gray-700">Total: <b>Rs. {order.amount}.00</b></p>
                        <p className="text-gray-700">Items: {order.items.length}</p>
                        <p className="text-gray-700">
                            <span>&#x25cf;</span> <b>{order.status}</b>
                        </p>
                        <button
                            onClick={fetchOrders}
                            className="bg-secondary text-white py-2 px-4 rounded-md hover:bg-secondary-dark"
                        >
                            Track Order
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;
