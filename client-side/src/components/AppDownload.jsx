import React from "react";

const AppDownload = () => {
  return (
    <div className="bg-primary py-8 my-8" id="app-download">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-4xl font-semibold text-ternary">
            For Better Experience Download <br />
            <span className="text-secondary text-xl font-bold">FoodWhiz App</span>
          </h1>
        </div>

        <div className="flex space-x-4 justify-center md:justify-start w-full max-w-full">
          <img
            src="/app_store.png"
            alt="App Store"
            className="w-32 md:w-40 hover:scale-105 transition-transform max-w-full"
          />
          <img
            src="/play_store.png"
            alt="Play Store"
            className="w-32 md:w-40 hover:scale-105 transition-transform max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
