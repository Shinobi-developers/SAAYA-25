import React from "react";
import PlaceholderImg from "./images/dummy.png";

interface Member {
  name: string;
  dept: string;
  semester?: string;
  imageUrl: string;
}

const teamMembers: Member[] = [
  { name: "MS. APARNA KC", 
    dept: "Electronics & Communication Engineering", 
    imageUrl: PlaceholderImg 
  },
  {
    name: "Mr. NIKHIL K V",
    dept: "Mechanical Engineering", 
    imageUrl: PlaceholderImg,
  },
  {
    name: "Athul Raj R ",
    dept: "Computer Science",
    semester: "8th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Sumayya sherin",
    dept: "Civil Engineering",
    semester: "8th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Sooraj P M",
    dept: "Civil Engineering",
    semester: "8th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Vaishnav m",
    dept: "Computer Science",
    semester: "8th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Aman Raza",
    dept: "Civil Engineering",
    semester: "8th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Anujith K",
    dept: "Mechanical Engineering",
    semester: "8th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Amrithijith k",
    dept: "Mechanical Engineering",
    semester: "8th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Nidhin",
    dept: "Mechanical Engineering",
    semester: "8th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Yahya sulaim",
    dept: "Computer Science & Engineering",
    semester: "8th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Sooraj s",
    dept: "Electrical & Electronics Engineering",
    semester: "8th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Nandu",
    dept: "Electrical & Electronics Engineering",
    semester: "8th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Anshad",
    dept: "Electrical & Electronics Engineeringg",
    semester: "8th",
    imageUrl: PlaceholderImg,
  }
];

const techTeamMembers: Member[] = [
  {
    name: "Naslu KK",
    dept: "Computer Science & Engineering",
    semester: "6th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Sabarish AV",
    dept: "Computer Science & Engineering",
    semester: "6th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Sreenandan K M",
    dept: "Computer Science & Engineering",
    semester: "6th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Shafah Muhammed Ummer",
    dept: "Computer Science & Engineering",
    semester: "6th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Natha Azeez",
    dept: "Computer Science & Engineering",
    semester: "6th",
    imageUrl: PlaceholderImg,
  },
]

const CoordinationTeam: React.FC = () => {
  return (
    <section className="py-12 bg-amber-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Coordination Team
        </h2>

        {/* Teachers Section */}
        <div className="text-center mb-8 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Teachers Coordinators
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center md:w-6/12">
            {teamMembers
              .filter((member) => !member.semester)
              .map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 p-3"
                >
                  <img
                    className="w-full object-cover"
                    src={member.imageUrl}
                    alt={member.name}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.dept}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Students Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Students Coordinators
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers
              .filter((member) => member.semester)
              .map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 p-3"
                >
                  <img
                    className="w-full object-cover"
                    src={member.imageUrl}
                    alt={member.name}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">
                      {member.dept} - {member.semester} Semester
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* dev team */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Tech Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {techTeamMembers
              .map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 p-3"
                >
                  <img
                    className="w-full object-cover"
                    src={member.imageUrl}
                    alt={member.name}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">
                      {member.dept} - {member.semester} Semester
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoordinationTeam;
