import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ url }) => {
  
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error('Error fetching food list');
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error('Error removing food');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-ternary mb-6">All Food List</h2>
      <div className="overflow-x-auto bg-white shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.55)] rounded-lg">
        <div className="flex bg-white text-gray-700 font-semibold p-4">
          <div className="w-1/5 text-center">Image</div>
          <div className="w-1/5 text-center">Name</div>
          <div className="w-1/5 text-center">Category</div>
          <div className="w-1/5 text-center">Price</div>
          <div className="w-1/5 text-center">Action</div>
        </div>
        {list.map((item, index) => (
          <div key={index} className="flex items-center border-t border-gray-200 p-4 hover:bg-gray-200">
            <div className="w-1/5 text-center">
              <img
                src={`${url}/images/${item.image}`}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-full mx-auto"
              />
            </div>
            <div className="w-1/5 text-center text-gray-700">{item.name}</div>
            <div className="w-1/5 text-center text-gray-500">{item.category}</div>
            <div className="w-1/5 text-center text-gray-700">Rs. {item.price}</div>
            <div className="w-1/5 text-center">
              <button
                onClick={() => removeFood(item._id)}
                className="text-red-600 hover:text-red-800 font-bold cursor-pointer"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
