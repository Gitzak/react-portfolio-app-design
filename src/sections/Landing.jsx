import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import profileImage from "../assets/profile-image.jpg";
import { FaRegEnvelope } from "react-icons/fa6";
import { FlagIcon } from "react-flag-kit";

const Landing = ({ setSelectedPage }) => {
    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
        >
            {/* IMAGE SECTION */}
            <div className="basis-3/6 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
                <motion.img
                    alt="profile"
                    className="z-10 w-full max-w-[300px] md:max-w-[500px] transition duration-500"
                    src={profileImage}
                />
            </div>

            {/* MAIN TEXT */}
            <div className="z-30 basis-3/6 mt-12 md:mt-32">
                {/* HEADINGS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-5xl font-RobotoMono z-10 text-center md:text-start">
                        Web
                        <span
                            className="xs:relative xs:font-extrabold z-20 xs:before:content-brush
              before:absolute ms-3 before:-left-[25px] before:-top-[70px] before:z-[-1]"
                        >
                            Developer
                        </span>
                    </p>

                    <p className="mt-5 mb-7 text-lg text-center md:text-start">
                        A skilled web developer based in Rabat, Morocco
                        <FlagIcon
                            code="MA"
                            className="inline-block w-8 h-5 ml-1 align-text-bottom"
                        />{" "}
                        creating responsive, user-friendly websites that blend
                        creativity and technical expertise, reflecting Moroccan
                        culture while embracing modern web development trends.
                    </p>
                </motion.div>

                {/* CALL TO ACTIONS */}
                <motion.div
                    className="flex mt-4 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <AnchorLink
                        className="bg-primary/80 text-darker rounded-sm 
            py-3 px-3 font-semibold transition duration-500 me-1
            hover:bg-primary/100 hover:bg-opacity-80"
                        onClick={() => setSelectedPage("about")}
                        href="#about"
                    >
                        About Me
                    </AnchorLink>
                    <AnchorLink
                        className="flex items-center gap-2 bg-dark/80 rounded-sm py-3 px-3 font-semibold
            transition duration-500 ms-1 hover:bg-dark/100 hover:bg-opacity-80"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        <FaRegEnvelope /> Contact Me
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    );
};

export default Landing;
