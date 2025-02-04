"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import Saaya23 from "./images/saaya23.jpg";
import Saaya22 from "./images/saaya22.jpg";
import Saaya22Nov from "./images/saaya22Nov.jpg";
import Saaya19 from "./images/saaya19.jpg";

const timelineData = [
  {
    year: "2023",
    name: "Saaya 2023",
    date: "Nov 24-25, 2023",
    description:
      "A grand celebration of art and culture, featuring stunning performances and exhibitions.",
    image: Saaya23,
  },
  {
    year: "2022",
    name: "Saaya 2022",
    date: "Nov 31- Dec 13, 2022",
    description:
      "An immersive journey into creativity, with digital and traditional art showcases.",
    image: Saaya22Nov,
  },
  {
    year: "2022",
    name: "Saaya 2022",
    date: "May 20-22, 2022",
    description:
      "A virtual art fest that brought artists together despite the challenges of the pandemic.",
    image: Saaya22,
  },
  {
    year: "2019",
    name: "Saaya 2019",
    date: "Nov 29-30 , 2019",
    description:
      "A virtual art fest that brought artists together despite the challenges of the pandemic.",
    image: Saaya19,
  },
];

const FestTimeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className="py-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl  font-bold text-center">
          Previous Editions
        </h2>
        <p className="text-center text-gray-500 -300 mt-2">
          A journey through the artistic legacy of Saaya
        </p>

        <div className="relative mt-12">
          {/* Scroll-Animated Timeline Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-6 top-0 bottom-0 w-1 bg-amber-300 origin-top"
          ></motion.div>

          <div className="space-y-16">
            {timelineData.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                {/* Enlarged Year Badge */}
                <span className="absolute left-0 top-1 w-12 h-12 bg-amber-300 text-white flex items-center justify-center rounded-full font-bold text-lg shadow-md">
                  {event.year}
                </span>

                {/* Event Card */}
                <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
                  <img
                    src={event.image}
                    alt={event.name}
                    className=" md:h-100  object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {event.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                    {event.date}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestTimeline;
