import Marquee from "react-fast-marquee";
import saayaText from "../../../public/images/SAAYA.png";

const MarqueeComp = ({ direction = "left" }: { direction?: "left" | "right" }) => (
  <Marquee speed={100} gradient={false} loop={0} pauseOnHover={false} direction={direction}>
    {Array(20).fill(saayaText).map((_item, index) => (
      <img key={index} src={saayaText} alt="" className="mx-2 h-30 max-md:h-10" />
    ))}
  </Marquee>
);

export default MarqueeComp;
