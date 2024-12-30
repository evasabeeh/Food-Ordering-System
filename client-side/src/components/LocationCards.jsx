import React from "react";

const locations = [
    "Mumbai",
    "Bangalore",
    "New Delhi",
    "Lucknow",
    "Noida",
    "Chennai",
    "Ahamdabad",
    "Gandhinagar",
    "Chandigarh",
    "Pune",
    "Kolkata",
    "Jaipur",
];

const LocationCards = () => {
    return (
        <div className="container py-8 my-8">
            <h1 className="text-ternary font-semibold text-2xl mb-6">Locations covered</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {locations.map((location, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.55)] rounded-lg p-4 text-center hover:scale-105 hover:-rotate-2 transition-transform duration-300 ease-out"
                    >
                        <h4 className="text-gray-500 text-lg">{location}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LocationCards;
