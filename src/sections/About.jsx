import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaDownload,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaJava,
} from "react-icons/fa6";
import {
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiDjango,
  SiWordpress,
  SiDocker,
  SiGit,
} from "react-icons/si";
import TitlePrimary from "../components/TitlePrimary";
import SubTitle from "../components/SubTitle";
import MyButton from "../components/MyButton";

// Define reusable variants for animations
const textVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const imageVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const iconVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-stone-900 isolate overflow-hidden px-6 py-24 sm:py-32 w-5/6 mx-auto lg:overflow-visible lg:px-0"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Text content with left to right animation */}
        <motion.div
          className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
          variants={textVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <SubTitle text="About Me" />
              <TitlePrimary text="Experienced Web Developer" />
              <p className="mt-6 text-md leading-8 text-white font-RobotoMono">
                A skilled web developer based in Rabat, Morocco, this individual
                combines creativity with technical expertise to create
                responsive, user-friendly websites that reflect Moroccan culture
                while staying up-to-date with the latest web development trends.
                Their work showcases sleek designs and seamless functionality,
                with a strong emphasis on quality and attention to detail.
              </p>
              <p className="text-md leading-8 mb-5 text-white font-RobotoMono mt-5">
                <span className="text-primary">
                  Passionate about innovation
                </span>
                , they explore new technologies to enhance user experience,
                specializing in visually engaging, high-performance websites
                optimized for accessibility. Committed to collaboration and
                clear communication, they aim to transform ideas into reality,
                delivering solutions that empower clients to achieve their
                digital goals.
              </p>
              <MyButton
                type="button"
                color="bg-primary"
                text="Download My Resume"
                icon={<FaDownload />}
              />
            </div>
          </div>
        </motion.div>

        {/* Image with right to left animation */}
        <motion.div
          className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          variants={imageVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
        >
          <img
            alt=""
            src="https://images.unsplash.com/photo-1551583899-d3f6258ec7c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[30rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 md:w-[35rem]"
          />
        </motion.div>
      </div>

      {/* Icons with bottom to top animation */}
      <motion.div
        className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-10 w-full"
        variants={iconVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <FaHtml5 className="text-orange-600 w-16 h-16 mx-auto" title="HTML5" />
        <FaCss3Alt className="text-blue-600 w-16 h-16 mx-auto" title="CSS3" />
        <FaReact className="text-cyan-500 w-16 h-16 mx-auto" title="React" />
        <FaVuejs className="text-green-500 w-16 h-16 mx-auto" title="Vue.js" />
        <FaLaravel className="text-red-600 w-16 h-16 mx-auto" title="Laravel" />
        <FaNodeJs
          className="text-green-600 w-16 h-16 mx-auto"
          title="Node.js"
        />
        <FaPython
          className="text-yellow-500 w-16 h-16 mx-auto"
          title="Python"
        />
        <FaPhp className="text-purple-600 w-16 h-16 mx-auto" title="PHP" />
        <FaJava className="text-red-500 w-16 h-16 mx-auto" title="Java" />
        <SiMongodb
          className="text-green-500 w-16 h-16 mx-auto"
          title="MongoDB"
        />
        <SiJavascript
          className="text-yellow-500 w-16 h-16 mx-auto"
          title="JavaScript"
        />
        <SiTypescript
          className="text-blue-500 w-16 h-16 mx-auto"
          title="TypeScript"
        />
        <SiDjango className="text-green-700 w-16 h-16 mx-auto" title="Django" />
        <SiWordpress
          className="text-blue-600 w-16 h-16 mx-auto"
          title="WordPress"
        />
        <SiDocker className="text-blue-500 w-16 h-16 mx-auto" title="Docker" />
        <SiGit className="text-red-600 w-16 h-16 mx-auto" title="Git" />
      </motion.div>
    </section>
  );
};

export default About;
