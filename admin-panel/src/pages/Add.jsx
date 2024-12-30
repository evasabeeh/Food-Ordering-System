import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);

        const response = await axios.post(`${url}/api/food/add`, formData);
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: "Salad",
            });
            setImage(false);
            toast.success(response.data.message);
        } else {
            toast.error(response.data.message);
        }
    };

    return (
        <div className="min-h-screen bg-primary flex items-center justify-center p-4">
            <form
                className="bg-white p-8 shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.55)] rounded-lg w-full max-w-2xl space-y-6"
                onSubmit={onSubmitHandler}
            >
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-secondary font-semibold">Upload Image</p>
                    <label
                        htmlFor="image"
                        className="cursor-pointer flex items-center justify-center w-40 h-40 border-2 border-dashed border-secondary rounded-lg"
                    >
                        <img
                            src={image ? URL.createObjectURL(image) : assets.upload_area}
                            alt="Upload Preview"
                            className="h-full w-full object-cover rounded-lg"
                        />
                    </label>
                    <input
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        id="image"
                        hidden
                        required
                    />
                </div>

                <div>
                    <label className="block text-secondary font-semibold mb-2">
                        Product Name
                    </label>
                    <input
                        onChange={onChangeHandler}
                        value={data.name}
                        type="text"
                        name="name"
                        placeholder="Type here"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block text-secondary font-semibold mb-2">
                        Product Description
                    </label>
                    <textarea
                        onChange={onChangeHandler}
                        value={data.description}
                        name="description"
                        rows="6"
                        placeholder="Write content here"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
                        required
                    ></textarea>
                </div>

                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                    <div className="flex-1">
                        <label className="block text-secondary font-semibold mb-2">
                            Product Category
                        </label>
                        <select
                            onChange={onChangeHandler}
                            name="category"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
                        >
                            <option value="Salad">Salad</option>
                            <option value="Appetizer">Appetizer</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Bread">Bread</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta & Pizza">Pasta & Pizza</option>
                            <option value="Sides">Sides</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className="flex-1">
                        <label className="block text-secondary font-semibold mb-2">
                            Product Price
                        </label>
                        <input
                            onChange={onChangeHandler}
                            value={data.price}
                            type="number"
                            name="price"
                            placeholder="Rs."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark transition"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default Add;
