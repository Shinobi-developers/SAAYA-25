import React from "react";

// Define the type for a guest
type Guest = {
  name: string;
  occupation: string;
  image: string; // URL or path to the guest's image
};

// Define the props for the GuestList component
interface GuestListProps {
  guests: Guest[];
}

const GuestList: React.FC<GuestListProps> = ({ guests }) => {
  return (
    <div className="p-8 bg-amber-300">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Special Guests
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {guests.map((guest, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Guest Image */}
            <div className="w-fulloverflow-hidden p-2">
              <img
                src={guest.image}
                alt={guest.name}
                className="w-full object-cover"
              />
            </div>

            {/* Guest Details */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {guest.name}
              </h2>
              <p className="text-gray-600">{guest.occupation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestList;