import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import profileImage from "../assets/profile-image.jpg";
import { FaRegEnvelope } from "react-icons/fa6";
import { FlagIcon } from "react-flag-kit";
import MyButton from "../components/MyButton";
import ScrollDownButton from "../components/ScrollDownButton";
import Loader from "../components/Loader";

const Hero = ({ setSelectedPage }) => {
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.5 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          {/* IMAGE SECTION */}
          <div className="basis-3/6 z-10 mt-2 md:mt-32 flex justify-center md:order-2">
            <motion.img
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              alt="profile"
              className="z-10 w-full max-w-[200px] md:max-w-[500px] transition duration-500"
              src={profileImage}
            />
          </div>

          {/* MAIN TEXT */}
          <div className="z-30 basis-3/6 mt-1 md:mt-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-2xl sm:text-5xl font-RobotoMono z-10 text-center md:text-start">
                Web
                <span className="xs:relative xs:font-extrabold z-20 xs:before:content-brush before:absolute ms-3 before:-left-[25px] before:-top-[70px] before:z-[-1]">
                  Developer
                </span>
              </p>
              <p className="mt-5 mb-7 font-RobotoMono text-md sm:text-lg text-center md:text-start">
                A skilled web developer based in Rabat, Morocco
                <FlagIcon
                  code="MA"
                  className="inline-block w-8 h-5 ml-1 align-text-bottom"
                />{" "}
                creating responsive, user-friendly websites
              </p>
            </motion.div>

            <motion.div
              className="flex mt-4 justify-center md:justify-start"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <AnchorLink
                className="me-2"
                onClick={() => setSelectedPage("about")}
                href="#about"
              >
                <MyButton type="button" color="bg-primary" text="About Me" />
              </AnchorLink>
              <AnchorLink
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                <MyButton
                  type="button"
                  color="bg-secondary"
                  text="Contact Me"
                  textColor="text-white"
                  icon={<FaRegEnvelope />}
                />
              </AnchorLink>
            </motion.div>

            <motion.div
              className="flex mt-2 justify-center md:justify-start"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <SocialMediaIcons />
            </motion.div>
          </div>
          <div className="flex justify-center mt-8">
            <ScrollDownButton />
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
