import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="w-64 h-screen bg-primary text-ternary flex flex-col p-4">
            <div className="space-y-4">
                <NavLink
                    to="/add"
                    className={({ isActive }) =>
                        `flex items-center space-x-3 px-4 py-2 rounded-lg hover:text-secondary ${isActive ? 'bg-white shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.55)] rounded-lg' : ''
                        }`
                    }
                >
                    <img src={assets.add_icon} alt="Add Items" className="w-6 h-6" />
                    <p className="text-sm font-medium">Add Items</p>
                </NavLink>

                <NavLink
                    to="/list"
                    className={({ isActive }) =>
                        `flex items-center space-x-3 px-4 py-2 rounded-lg hover:text-secondary ${isActive ? 'bg-white shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.55)] rounded-lg' : ''
                        }`
                    }
                >
                    <img src={assets.order_icon} alt="List Items" className="w-6 h-6" />
                    <p className="text-sm font-medium">List Items</p>
                </NavLink>

                <NavLink
                    to="/orders"
                    className={({ isActive }) =>
                        `flex items-center space-x-3 px-4 py-2 rounded-lg hover:text-secondary ${isActive ? 'bg-white shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.55)] rounded-lg' : ''
                        }`
                    }
                >
                    <img src={assets.order_icon} alt="Orders" className="w-6 h-6" />
                    <p className="text-sm font-medium">Orders</p>
                </NavLink>
            </div>
        </div>
    );
};

export default SideBar;
