import { useEffect, useState } from "react";

const EventCountdown = () => {
  const eventDate = new Date("2025-02-06T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(eventDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(eventDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const getTimeComponents = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeComponents(timeLeft);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-transparent text-white w-full mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
        Countdown to Event
      </h2>
      {timeLeft > 0 ? (
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {[
            { label: "Days", value: days },
            { label: "Hours", value: hours },
            { label: "Minutes", value: minutes },
            { label: "Seconds", value: seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-green-300/30 px-6 py-4 rounded-lg w-24 md:w-32 lg:w-40 text-white"
            >
              <p className="text-4xl md:text-[70px] font-bold">{item.value}</p>
              <p className="text-sm md:text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl font-semibold text-center">The event has started!</p>
      )}
    </div>
  );
};

export default EventCountdown;
