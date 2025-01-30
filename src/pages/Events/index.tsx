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
          name: "Story Writing English",
          date: "January 30, 2025",
          time: "1:30 PM - 2:00 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Story Writing Hindi",
          date: "January 30, 2025",
          time: "2:00 PM - 2:30 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Story Writing Malayalam",
          date: "January 30, 2025",
          time: "2:30 PM - 3:00 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Cartoon",
          date: "January 30, 2025",
          time: "3:00 PM - 3:30 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Pencil Drawing",
          date: "January 30, 2025",
          time: "3:30 PM - 4:00 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Poem Writing English",
          date: "January 31, 2025",
          time: "9:30 AM - 10:00 AM",
          venue: "Seminar Hall"
      },
      {
          name: "Poem Writing Malayalam",
          date: "January 31, 2025",
          time: "10:00 AM - 10:30 AM",
          venue: "Seminar Hall"
      },
      {
          name: "Poem Writing Hindi",
          date: "January 31, 2025",
          time: "10:30 AM - 11:00 AM",
          venue: "Seminar Hall"
      },
      {
          name: "Essay Writing English",
          date: "January 31, 2025",
          time: "11:00 AM - 11:30 AM",
          venue: "Seminar Hall"
      },
      {
          name: "Essay Writing Malayalam",
          date: "January 31, 2025",
          time: "11:30 AM - 12:00 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Essay Writing Hindi",
          date: "January 31, 2025",
          time: "12:00 PM - 12:30 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Spot Photography",
          date: "January 31, 2025",
          time: "12:30 PM - 2:00 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Debate",
          date: "January 31, 2025",
          time: "3:00 PM - 4:00 PM",
          venue: "Seminar Hall"
      }
  ],
    "Pre Stage Event": [
      {
          name: "Elocution Malayalam",
          date: "January 31, 2025",
          time: "2:00 PM - 2:30 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Elocution English",
          date: "January 31, 2025",
          time: "2:30 PM - 3:00 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Classical Music",
          date: "February 3, 2025",
          time: "9:30 AM - 10:00 AM",
          venue: "Seminar Hall"
      },
      {
          name: "Light Music",
          date: "February 3, 2025",
          time: "10:00 AM - 10:30 AM",
          venue: "Seminar Hall"
      },
      {
          name: "Poem Recitation English",
          date: "February 3, 2025",
          time: "10:30 AM - 11:00 AM",
          venue: "Seminar Hall"
      },
      {
          name: "Poem Recitation Malayalam",
          date: "February 3, 2025",
          time: "10:30 AM - 11:00 AM",
          venue: "Seminar Hall"
      },
      {
          name: "Poem Recitation Hindi",
          date: "February 3, 2025",
          time: "10:30 AM - 11:00 AM",
          venue: "Seminar Hall"
      },
      {
          name: "Mappila Pattu",
          date: "February 3, 2025",
          time: "11:30 AM - 12:15 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Group Song Western",
          date: "February 3, 2025",
          time: "1:30 PM - 2:30 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Nadan Pattu",
          date: "February 3, 2025",
          time: "2:30 PM - 3:00 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Rap (English, Malayalam)",
          date: "February 3, 2025",
          time: "3:00 PM - 3:30 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Patriotic Song",
          date: "February 3, 2025",
          time: "3:30 PM - 4:00 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Instruments",
          date: "February 4, 2025",
          time: "9:30 AM - 10:30 AM",
          venue: "Seminar Hall"
      },
      {
          name: "Mehandi",
          date: "February 4, 2025",
          time: "10:30 AM - 11:30 AM",
          venue: "Seminar Hall"
      },
      {
          name: "Mono Act",
          date: "February 4, 2025",
          time: "11:30 AM - 12:00 PM",
          venue: "Seminar Hall"
      },
      {
          name: "Mimicry",
          date: "February 4, 2025",
          time: "11:30 AM - 12:00 PM",
          venue: "Seminar Hall"
      }
  ]
  
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
                  (window.location.href = "https://bit.ly/saayaos")
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
