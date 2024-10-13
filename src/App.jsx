import { useEffect, useState } from "react";
import "./App.css";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./sections/Navbar";
import DotGroup from "./components/DotGroup";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
    const [selectedPage, setSelectedPage] = useState("home");
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    const isDesktop = useMediaQuery("(min-width: 1060px)");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage("home");
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="app bg-deep-blue">
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <div className="w-5/6 mx-auto md:h-full">
                {isDesktop && (
                    <DotGroup
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                )}
                <Hero setSelectedPage={setSelectedPage} />
            </div>
            <div className="w-6/6 mx-auto ">
                <About />
            </div>
            <div className="w-5/6 mx-auto">
                <Projects />
            </div>
            <div className="w-5/6 mx-auto">
                <Testimonials />
            </div>
            <div className="w-5/6 mx-auto">
                <Contact />
            </div>
            <Footer setSelectedPage={setSelectedPage} />
        </div>
    );
}

export default App;
