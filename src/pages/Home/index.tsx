import "./style.css";

import Counter from "../../components/EventCounter"
import Marquee from "../../components/Marquee"
import AboutSaaya from "../../components/AboutSaaya";
import Leaderboard from "../../components/Leaderboard/index";
import EventSlider from "../../components/EventAccordion";
import GuestList from "../../components/GustList";

const guests = [
  {
    name: "Arjun Ashokan",
    occupation: "Actor",
    image: "../images/arju.png", 
  },
  {
    name: "Mathew Thomas",
    occupation: "Actor",
    image: "../images/mathew.png",
  },
  {
    name: "Sangeeth Prathap",
    occupation: "Actor and film editor",
    image: "../images/sangee.png", 
  },
  {
    name: "Shyam Mohan",
    occupation: "Actor",
    image: "../images/shyam.png",
  },
  {
    name: "Mahima Nambiar",
    occupation: "Actress",
    image: "../images/mahima.png",
  },
];

const Home = () => {
  return (
    <div>
    <div className="text-center p-10 hero W-[100vw] h-screen flex justify-center items-center flex-col">
      <p className="text-[70px] max-md:text-2xl font-bold text-white font-mono">
        Saaya Arts & Cultural Fest '25 <br />
        <span className="text-5xl max-md:text-lg">February 06-07</span>
      </p>
      <div className="">
      <Counter />
    </div>
    </div>
    <div className="flex justify-center bg-amber-300 p-5 md:p-10">
      <AboutSaaya />
    </div>
    <div className="py-1">
    <Marquee direction="right" /> 
    <Marquee direction="left" />
    </div>
    <div className="w-full">
      <Leaderboard />
    </div>
    <div className="w-full">
      <EventSlider />
    </div>
    <div>
      <GuestList guests={guests}  />
    </div>
    </div>
  );
};

export default Home;
