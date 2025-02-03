// import ProfileCard from "../../components/ProfileCard";
import { useNavigate } from "react-router-dom";
import TextLogo from "../../../public/images/SAAYA TEXT.png";
import Slider from "../../components/Slider";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/events");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // const profileData = [
  //   {
  //     name: "Stan Lee",
  //     designation: "President",
  //     sem: "S6 CSE",
  //     img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     name: "Nick Fury",
  //     designation: "Vice President",
  //     sem: "S6 CSE",
  //     img: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     name: "Steve Roggers",
  //     designation: "Secretary",
  //     sem: "S6 CSE",
  //     img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  //   {
  //     name: "Steve Roggers",
  //     designation: "Secretary",
  //     sem: "S6 CSE",
  //     img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //   },
  // ]

  return (
    <div className="">
      <div className="bg-[url('../images/awh.png')] bg-cover bg-center w-full flex items-center flex-col p-20 text-white ">
        <img src={TextLogo} alt="" className=" w-10/12 md:w-3/12 " />
        <h1 className="text-2xl max-md:text-lg text-center">
          “Don’t wait for the perfect moment, take the moment and make it
          perfect.”
        </h1>
        <div className="w-[90vw] md:w-10/12 mt-10 ">
          <Slider />
        </div>
      </div>
      <div className="bg-amber-300 flex flex-col items-center">
        <div className="flex flex-col justify-start w-8/12 max-md:w-full md:py-24 text-justify p-4 ">
          <div className="mt-5">
            <h1 className="text-3xl font-bold mb-1.5 max-md:text-2xl ">
              About Saaya
            </h1>
            <p className="text-sm md:text-lg">
              Saaya is the vibrant cultural fest of AWH Engineering College, a
              two-day celebration of art, music, and creativity. Scheduled for
              <span className="font-bold"> February 6-7</span>, this fest brings
              together students from diverse backgrounds to showcase their
              talents, push creative boundaries, and experience the true essence
              of artistic expression.
              <br /> With a perfect blend of music, dance, drama, and fine arts,
              Saaya is more than just a festival—it's a platform for innovation,
              self-expression, and unforgettable memories. Whether you're an
              artist, a performer, or an enthusiastic spectator,{" "}
              <span className="font-bold">
                {" "}
                Saaya promises an immersive cultural experience
              </span>{" "}
              filled with energy, passion, and celebration.
              <br /> Join us as we turn the campus into a hub of creativity and
              make Saaya 2025 an event to remember!
            </p>
          </div>
          <div className="flex justify-end mt-10 md:mt-20">
            <button
              className=" w-fit px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-amber-300"
              onClick={handleClick}
            >
              Show Events
            </button>
          </div>
        </div>
      </div>
      {/* <h1 className="text-3xl font-bold">About the Art Fest</h1>
      <p className="mt-4 text-lg">This is our college’s annual art festival showcasing student talent in various forms of art.</p>

      <div className="w-[100%] flex flex-wrap bg-[rgba(0,0,0,0.5)] p-[1rem] justify-evenly gap-[1rem]">
        {
          profileData ?
            profileData.map(profile => (
              <ProfileCard key={profile.name} profile={profile} />
            ))
            :
            "Loading...."
        }

      </div> */}
    </div>
  );
};

export default About;
