import React from 'react';

const Collection = () => {
    const cards = [
        {
            image: '/homefood.jpg',
            title: 'Order online',
            description: 'Stay home and order to your doorstep.',
        },
        {
            image: '/party.jpg',
            title: 'Festive special',
            description: 'Experience the joy of this festival at the restaurants with special events.',
        },
        {
            image: '/gathering.jpg',
            title: 'Party dining',
            description: 'Indulge in scrumptious food, cheer, and celebration!',
        },
    ];

    return (
        <div className="py-8 my-8">
            <div className="container mx-auto">
                <h1 className="text-ternary font-semibold text-2xl mb-6">Explore our collections</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.55)] rounded-lg overflow-hidden duration-300 hover:scale-105 transition-transform max-w-full"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold">{card.title}</h2>
                                <p className="text-gray-700 mt-2">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
