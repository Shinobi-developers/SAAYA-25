import React from "react";
import PlaceholderImg from "./images/dummy.png";

interface Member {
  name: string;
  dept: string;
  semester?: string;
  imageUrl: string;
  tech?: boolean;
}

const teamMembers: Member[] = [
  { name: "Teacher 1", dept: "Computer Science", imageUrl: PlaceholderImg },
  {
    name: "Teacher 2",
    dept: "Electrical Engineering",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Student 1",
    dept: "Computer Science",
    semester: "3rd",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Student 2",
    dept: "Mechanical Engineering",
    semester: "2nd",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Student 3",
    dept: "Electrical Engineering",
    semester: "1st",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Student 4",
    dept: "Civil Engineering",
    semester: "4th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Student 1",
    dept: "Computer Science",
    semester: "3rd",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Student 4",
    dept: "Civil Engineering",
    semester: "4th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Student 3",
    dept: "Electrical Engineering",
    semester: "1st",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Student 4",
    dept: "Civil Engineering",
    semester: "4th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Student 3",
    dept: "Electrical Engineering",
    semester: "1st",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Student 4",
    dept: "Civil Engineering",
    semester: "4th",
    imageUrl: PlaceholderImg,
  },
  {
    name: "Student 3",
    dept: "Electrical Engineering",
    semester: "1st",
    imageUrl: PlaceholderImg,
    tech: true,
  },
  {
    name: "Student 4",
    dept: "Civil Engineering",
    semester: "4th",
    imageUrl: PlaceholderImg,
    tech: true,
  },
];

const CoordinationTeam: React.FC = () => {
  return (
    <section className="py-12 bg-amber-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Coordination Team
        </h2>

        {/* Teachers Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Teachers Coordinators
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
            {teamMembers
              .filter((member) => member.tech)
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
