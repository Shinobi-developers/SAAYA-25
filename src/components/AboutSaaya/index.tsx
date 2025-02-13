import { useNavigate } from "react-router-dom";

const AboutSaaya = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col justify-start w-8/12 max-md:w-full  py-10 md:py-24 text-justify">
      <div className="mt-5">
        <h1 className="text-3xl font-bold mb-1.5 max-md:text-2xl ">
          AWH Engineering College Arts Day
        </h1>
        <p className="text-sm md:text-lg ">
          AWH Engineering College's Arts Day is a vibrant celebration of
          creativity, talent, and cultural diversity within the academic
          community. This annual event provides a unique platform for students
          to showcase their artistic prowess, whether through dance, music,
          drama, or visual arts. The campus comes alive with a kaleidoscope of
          colors and a symphony of performances that reflect the rich cultural
          tapestry of the college. It's a day where engineering meets artistry,
          fostering a sense of unity and camaraderie among students and faculty.
          The Arts Day at AWH Engineering College is not just a showcase of
          talent; it's a testament to the holistic development of individuals
          who balance the rigors of engineering education with a passion for the
          arts. As the campus buzzes with creativity and enthusiasm, it's a
          reminder that education is not just about technical knowledge but also
          about nurturing the soul and unleashing the creative spirit within
          each student.
        </p>
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-bold mb-1.5 max-md:text-2xl">
          Our Vision
        </h1>
        <p className="text-sm md:text-lg">
          To mould competent, socially committed Engineering professionals
          through Quality Education.
        </p>
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-bold mb-1.5 max-md:text-2xl">
          Our Mission
        </h1>
        <p className="text-sm md:text-lg">
          <span className="font-bold">M1</span> To provide a sound basis for
          engineering principles through innovative capabilities with the help
          of competent faculty and infrastructure.
          <br />
          <span className="font-bold">M2</span> Impart employability skills in
          students through training programs, extracurricular and co-curricular
          activities.
          <br />
          <span className="font-bold">M3</span> To inculcate human values and
          leadership qualities in students through social and industry outreach.
        </p>
      </div>
      <div className="flex justify-end mt-10 md:mt-20">
        <button
          className=" w-fit px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-amber-300"
          onClick={handleClick}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutSaaya;
