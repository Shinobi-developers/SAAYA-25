import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const Events = () => {
  const eventCategories: {
    [key: string]: {
      name: string;
      date: string;
      time: string;
      venue: string;
    }[];
  } = {
    "On Stage": [
      {
        name: "Drama",
        date: "March 10, 2025",
        time: "6:00 PM",
        venue: "Main Auditorium",
      },
      {
        name: "Music Battle",
        date: "March 11, 2025",
        time: "5:00 PM",
        venue: "Concert Hall",
      },
      {
        name: "Dance Show",
        date: "March 12, 2025",
        time: "7:00 PM",
        venue: "Open Stage",
      },
    ],
    "Off Stage": [
      {
        name: "Painting",
        date: "March 10, 2025",
        time: "10:00 AM",
        venue: "Art Room",
      },
      {
        name: "Photography",
        date: "March 11, 2025",
        time: "11:30 AM",
        venue: "Photo Studio",
      },
      {
        name: "Poetry Slam",
        date: "March 12, 2025",
        time: "2:00 PM",
        venue: "Library Hall",
      },
    ],
    "Second Stage": [
      {
        name: "Debate",
        date: "March 10, 2025",
        time: "3:00 PM",
        venue: "Conference Room",
      },
      {
        name: "Quiz",
        date: "March 11, 2025",
        time: "4:00 PM",
        venue: "Lecture Hall 2",
      },
      {
        name: "Stand-up Comedy",
        date: "March 12, 2025",
        time: "8:00 PM",
        venue: "Cafeteria Stage",
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState<string>("On Stage");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Heading Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-white">Saaya'25 Events</h1>
        <p className="text-lg text-gray-400 mt-2">
          Explore exciting events across different categories!
        </p>
      </div>

      {/* Horizontal Category Selector */}
      <nav className="w-full bg-gray-800 p-4 flex justify-center space-x-6 overflow-x-auto">
        {Object.keys(eventCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-lg font-semibold px-6 py-2 rounded-lg transition ${
              activeCategory === category
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Event List */}
      <div className="p-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          {activeCategory}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventCategories[activeCategory].map((event, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg transition hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
              <p className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-5 h-5 text-blue-500" /> {event.date}
              </p>
              <p className="flex items-center gap-2 text-gray-400 mt-1">
                <Clock className="w-5 h-5 text-purple-500" /> {event.time}
              </p>
              <p className="flex items-center gap-2 text-gray-400 mt-1">
                <MapPin className="w-5 h-5 text-red-500" /> {event.venue}
              </p>
              <button
                onClick={() =>
                  (window.location.href = "https://your-registration-link.com")
                }
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold transition hover:bg-blue-700"
              >
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
