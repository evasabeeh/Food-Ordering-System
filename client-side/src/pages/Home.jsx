import React, { useState } from 'react';
import Header from '../components/Header/Header';
import ExploreMenu from '../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../components/FoodDisplay';
import AppDownload from '../components/AppDownload';
import LocationCards from '../components/LocationCards';
import Collection from '../components/Collection';

const Home = () => {
  const [category,setCategory] = useState("All");
  return (
    <div>
        <Header/>
        <Collection />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <LocationCards />
        <AppDownload />
    </div>
  )
}

export default Home;