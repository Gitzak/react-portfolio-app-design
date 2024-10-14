import React from "react";
import { motion } from "framer-motion";
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

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-stone-900 isolate overflow-hidden px-6 py-24 sm:py-32 w-5/6 mx-auto lg:overflow-visible lg:px-0"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <SubTitle text="About Me" />
                <TitlePrimary text="Experienced Web Developer" />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="mt-6 text-md leading-8 text-white font-RobotoMono">
                  A skilled web developer based in Rabat, Morocco, this
                  individual combines creativity with technical expertise to
                  create responsive, user-friendly websites that reflect
                  Moroccan culture while staying up-to-date with the latest web
                  development trends. Their work showcases sleek designs and
                  seamless functionality, with a strong emphasis on quality and
                  attention to detail.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
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
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <MyButton
                  type="button"
                  color="bg-primary"
                  text="Download My Resume"
                  icon={<FaDownload />}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            alt=""
            src="https://images.unsplash.com/photo-1551583899-d3f6258ec7c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[30rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 md:w-[35rem]"
          />
        </motion.div>
      </div>

      <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-10 w-full">
        {[
          FaHtml5,
          FaCss3Alt,
          FaReact,
          FaVuejs,
          FaLaravel,
          FaNodeJs,
          FaPython,
          FaPhp,
          FaJava,
          SiMongodb,
          SiJavascript,
          SiTypescript,
          SiDjango,
          SiWordpress,
          SiDocker,
          SiGit,
        ].map((Icon, index) => (
          <motion.div
            key={index}
            className="text-primary w-16 h-16 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <Icon title={Icon.displayName} className="w-16 h-16" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
