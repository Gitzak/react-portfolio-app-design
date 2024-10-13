import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <div className="flex justify-start items-center gap-2">
          <FaReact className="text-3xl" />
          <h4 className="font-RobotoMono text-2xl font-bold">Web Developer</h4>
        </div>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-12 font-RobotoMono text-md font-semibold m-3">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
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
              className="fixed right-0 bottom-0 h-full bg-blue w-[300px]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              {/* CLOSE ICON */}
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <FaXmark />
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Testimonials"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
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
