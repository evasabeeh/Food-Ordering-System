import React, { useState } from 'react';
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { StoreContext } from '../../StoreContext';
import { ShoppingCart, User, Package, Search } from "lucide-react";

const Navbar = (props) => {
    const { setShowLogin } = props;
    const [menu, setMenu] = useState("home");

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

    return (
        <div className='navbar'>
            <Link to="/"><img src="/logo.png" alt="Logo" className='logo' /></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>get app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className='navbar-right'>
                <Search className="w-5 h-5 cursor-pointer hover:text-secondary" />
                <div className="navbar-search-icon relative">
                    <Link to="/cart" className="relative">
                        <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-secondary" />
                        <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
                    </Link>
                </div>
                {!token ? (
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                ) : (
                    <div className='navbar-profile relative group'>
                        <User className="w-5 h-5 cursor-pointer hover:text-secondary" />
                        <ul className="nav-profile-dropdown absolute hidden group-hover:flex flex-col bg-white p-2 rounded-md shadow-lg">
                            <li
                                onClick={() => navigate("/myorders")}
                                className="flex items-center gap-2 p-2 cursor-pointe rounded">
                                <Package className="w-4 h-4" />
                                <p>Orders</p>
                            </li>
                            <hr className="border-t my-1" />
                            <li
                                onClick={logout}
                                className="flex items-center gap-2 p-2 cursor-pointer rounded">
                                <User className="w-4 h-4" />
                                <p>Logout</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
