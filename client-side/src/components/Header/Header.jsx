import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const images = [
    '/header_img.png',
    '/header_img2.jpg',
    '/header_img3.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      className="header py-8 my-8"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="header-contents">
        <h2 >Discover the best food & drinks.</h2>
        <p>
          Explore a diverse menu filled with mouthwatering dishes crafted from the finest ingredients. Satisfy your cravings and elevate your dining experience with every delicious bite.
        </p>
        <button className="hover:bg-secondary hover:text-white">Explore more</button>
      </div>
    </div>
  );
};

export default Header;