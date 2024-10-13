import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";

const Link = ({ page, selectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            href={`#${lowerCasePage}`}
            className={`${
                selectedPage === lowerCasePage ? "text-primary" : "text-light"
            } hover:text-primary transition duration-500`}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage
        ? ""
        : "bg-darker bg-opacity-50 backdrop-blur-md shadow-lg";

    // Highlight current section in the mobile menu
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "home",
                "about",
                "projects",
                "testimonials",
                "contact",
            ];
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (
                        rect.top <= window.innerHeight / 2 &&
                        rect.bottom >= window.innerHeight / 2
                    ) {
                        if (selectedPage !== section) {
                            setSelectedPage(section);
                        }
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [selectedPage, setSelectedPage]);

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <div className="flex justify-start items-center gap-2">
                    <FaReact className="text-3xl" />
                    <h4 className="font-RobotoMono text-2xl font-bold">
                        Web Developer
                    </h4>
                </div>

                {/* DESKTOP NAV */}
                {isDesktop ? (
                    <div className="flex justify-between gap-12 font-RobotoMono text-md font-semibold m-3">
                        <Link page="Home" selectedPage={selectedPage} />
                        <Link page="About" selectedPage={selectedPage} />
                        <Link page="Projects" selectedPage={selectedPage} />
                        <Link page="Testimonials" selectedPage={selectedPage} />
                        <Link page="Contact" selectedPage={selectedPage} />
                    </div>
                ) : (
                    <button
                        className="rounded-full bg-red p-4"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <FaBars />
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                <AnimatePresence>
                    {!isDesktop && isMenuToggled && (
                        <motion.div
                            className="fixed right-0 top-0 h-full min-h-screen w-[80vw] bg-dark bg-opacity-80 backdrop-blur-lg shadow-lg text-light"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* CLOSE ICON */}
                            <div className="flex justify-end p-8">
                                <button
                                    onClick={() =>
                                        setIsMenuToggled(!isMenuToggled)
                                    }
                                >
                                    <FaXmark />
                                </button>
                            </div>

                            {/* MENU ITEMS */}
                            <div className="flex flex-col items-center gap-10 text-2xl font-semibold">
                                <Link page="Home" selectedPage={selectedPage} />
                                <Link
                                    page="About"
                                    selectedPage={selectedPage}
                                />
                                <Link
                                    page="Projects"
                                    selectedPage={selectedPage}
                                />
                                <Link
                                    page="Testimonials"
                                    selectedPage={selectedPage}
                                />
                                <Link
                                    page="Contact"
                                    selectedPage={selectedPage}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
