import "./style.css";

import saayaAnimation from "../../../public/images/saaya 1-4.gif";
import Tv from "../../../public/images/TV.png";
import Counter from "../../components/EventCounter"
import Marquee from "../../components/Marquee"

const Home = () => {
  return (
    <div>
    <div className="text-center p-10 hero W-[100vw] h-screen flex justify-center items-center flex-col">
      <div className="w-full h-auto max-w-[700px] mx-auto overflow-hidden relative md:hidden">
        <img
          src={saayaAnimation}
          alt="saayaGif"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <img src={Tv} alt="tv" className="w-1/2 md:w-1/2 lg:w-1/2 h-auto" />
        </div>
      </div>
      <p className="text-[70px] max-md:text-xl font-bold text-white font-mono">
        Saaya Arts & Cultural Fest '25 <br />
        <span className="text-5xl max-md:text-sm">February 06-07</span>
      </p>
      <div className="">
      <Counter />
    </div>
    </div>
    <div className="">
    <Marquee direction="right" /> 
    <Marquee direction="left" />
    </div>
    </div>
  );
};

export default Home;
