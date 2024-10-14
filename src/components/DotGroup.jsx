import { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyles = `relative bg-primary scale-125 opacity-100 transition-all duration-300
    before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-primary before:left-[-50%] before:top-[-50%]`;
    const defaultStyles = "bg-dark2 opacity-60 transition-all duration-300";

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
        <div className="flex flex-col gap-6 fixed top-[40%] right-7 z-40">
            <AnchorLink
                href="#home"
                className={`${
                    selectedPage === "home" ? selectedStyles : defaultStyles
                } w-3 h-3 rounded-full`}
            ></AnchorLink>
            <AnchorLink
                href="#about"
                className={`${
                    selectedPage === "about" ? selectedStyles : defaultStyles
                } w-3 h-3 rounded-full`}
            ></AnchorLink>
            <AnchorLink
                href="#projects"
                className={`${
                    selectedPage === "projects" ? selectedStyles : defaultStyles
                } w-3 h-3 rounded-full`}
            ></AnchorLink>
            <AnchorLink
                href="#testimonials"
                className={`${
                    selectedPage === "testimonials"
                        ? selectedStyles
                        : defaultStyles
                } w-3 h-3 rounded-full`}
            ></AnchorLink>
            <AnchorLink
                href="#contact"
                className={`${
                    selectedPage === "contact" ? selectedStyles : defaultStyles
                } w-3 h-3 rounded-full`}
            ></AnchorLink>
        </div>
    );
};

export default DotGroup;
