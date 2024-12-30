import React, { useContext, Suspense, lazy } from 'react'
import { StoreContext } from '../StoreContext'
import { RotatingLines } from "react-loader-spinner";

const FoodItem = lazy(() => import("./FoodItem/FoodItem"));

function Loader() {
  return (
    <div style={{textAlign: "center"}}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  )
}

const FoodDisplay = (props) => {

    const {category} = props;
    const {food_list} = useContext(StoreContext)

  return (
    <div className="py-8 my-8" id='food-display'>
        <h1 className="text-2xl font-semibold text-ternary">Top dishes near you</h1>
        { food_list.length === 0 ? (<Loader/>) : <></>}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-8 gap-x-7 gap-y-12">
            <Suspense fallback={<div>Loading...</div>}>
            {food_list && food_list?.map((item, index)=>{
              if(category === "All" || category === item.category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
            })}
            </Suspense>
        </div>
    </div>
  )
}

export default FoodDisplay;
