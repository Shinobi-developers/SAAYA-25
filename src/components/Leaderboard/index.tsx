  import { FaMedal } from "react-icons/fa";

const departmentData = [
  { name: "Computer Science", points: 0 },
  { name: "Mechanical Engineering", points: 0 },
  { name: "Civil Engineering", points: 0 },
  { name: "Electrical Engineering", points: 0 },
  { name: "Electronics & Communication", points: 0 },
];

const getMedalColor = (rank: number) => {
  switch (rank) {
    case 1: return "text-yellow-400";
    case 2: return "text-gray-400";
    case 3: return "text-orange-400";
    default: return "text-gray-600";
  }
};

const Leaderboard = () => {
  return (
    <div className="w-full max-w-lg mx-auto bg-white p-10 my-10  md:flex md:flex-col md:items-center">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4">
        Saaya'25 Leaderboard
      </h2>
      <ul className="space-y-3 md:w-300 ">
        {departmentData.map((dept, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-3 rounded-lg w-full ${
              index < 3 ? "bg-gray-100 shadow-md" : "bg-white"
            }`}
          >
            <div className="flex items-center gap-3 md:h-20">
              <span className={`text-xl font-bold ${getMedalColor(index + 1)}`}>
                {index < 3 ? <FaMedal size={24} /> : `#${index + 1}`}
              </span>
              <p className="md:text-xl text-gray-800 font-medium">{dept.name}</p>
            </div>
            <p className="md:text-xl text-gray-700 font-semibold">{dept.points} pts</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
