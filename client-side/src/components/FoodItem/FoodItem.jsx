import React, { useContext } from 'react';
import "./FoodItem.css";
import { StoreContext } from '../../StoreContext';
import { PlusCircle, Minus, Plus } from "lucide-react";

const FoodItem = (props) => {

    const {id, name, price, description, image} = props;
    const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext)

  return (
      <div className="food-item shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.55)] rounded-lg hover:bg-white hover:scale-105 transition-transform max-w-full">
        <div className="food-item-img-container">
            <img className="food-item-image" src={`${url}/images/${image}`} alt="" />
            {!cartItems?.[id]
                ? (
                    <PlusCircle
                        className="add text-secondary cursor-pointer"
                          onClick={() => {
                            console.log(id);           // id print
                            addToCart(id)
                        }
                        }
                        size={24}
                    />
                )
                : (
                    <div className="food-item-counter flex items-center gap-2">
                        <Minus
                            className="text-red-500 cursor-pointer"
                            onClick={() => removeFromCart(id)}
                            size={24}
                        />
                        <p>{cartItems[id]}</p>
                        <Plus
                            className="text-ternary cursor-pointer"
                            onClick={() => addToCart(id)}
                            size={24}
                        />
                    </div>
                )
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src="/rating_stats.png" alt="" />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>Rs. {price}</p>
        </div>
    </div>
  )
}

export default FoodItem;