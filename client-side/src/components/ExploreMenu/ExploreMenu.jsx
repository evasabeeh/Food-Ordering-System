import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = (props) => {

  const { category, setCategory } = props;

  return (
    <div className="flex flex-col gap-5 my-8 py-8" id="explore-menu">
      <h1 className="text-2xl font-semibold text-ternary">Explore menu</h1>
      <p className="max-w-full text-gray-500">
        Explore our extensive menu offering a wide selection of exquisite dishes.
      </p>
      <div className="flex justify-between items-center gap-[30px] text-center my-5 overflow-x-auto scrollbar-hide">
        {menu_list?.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prevData) =>
                  prevData === item.menu_name ? 'All' : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={`transition-transform duration-300 ease-in-out ${category === item.menu_name ? 'active' : ''
                  } hover:scale-110`}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
