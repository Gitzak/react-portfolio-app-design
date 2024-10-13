import { useEffect, useState } from "react";
import "./App.css";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./sections/Navbar";
import DotGroup from "./components/DotGroup";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Projects from "./sections/Projects";

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
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <div className="w-6/6 mx-auto ">
        <About setSelectedPage={setSelectedPage} />
      </div>
      <div className="w-5/6 mx-auto">
        <Projects setSelectedPage={setSelectedPage} />
      </div>
    </div>
  );
}

export default App;
