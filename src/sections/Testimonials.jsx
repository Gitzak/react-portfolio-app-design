import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import SubTitle from "../components/SubTitle";
import TitlePrimary from "../components/TitlePrimary";

const slidesData = [
  {
    title: "Exceptional Quality",
    content:
      "Working with you was a breeze. You delivered exactly what I needed, ahead of schedule, with incredible attention to detail.",
    author: "Alex Johnson",
  },
  {
    title: "Highly Recommended",
    content:
      "You understood my vision perfectly and brought it to life with great professionalism and skill.",
    author: "Taylor Smith",
  },
  {
    title: "Outstanding Experience",
    content:
      "You exceeded my expectations! I couldn’t be happier with the results and would definitely work with you again.",
    author: "Jamie Lee",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    const keenSlider = new KeenSlider(sliderRef.current, {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.1, // Adjusted for more spacing
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 2.2, // Adjusted for more spacing on larger screens
            spacing: 32,
          },
        },
      },
    });

    prevRef.current.addEventListener("click", () => keenSlider.prev());
    nextRef.current.addEventListener("click", () => keenSlider.next());

    return () => keenSlider.destroy();
  }, []);

  return (
    <section id="testimonials">
      <div className="bg-stone-900 py-24 sm:py-32">
        <div className="mx-auto px-4 sm:px-6 lg:me-0 lg:pe-0 lg:ps-8">
          <div className="max-w-full items-end justify-between sm:flex sm:pe-6 lg:pe-8">
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
              <div className="flex flex-col gap-3">
                <SubTitle text="Testimonials" />
                <TitlePrimary text="See what clients are saying about my work." />
              </div>
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
              <div className="mt-8 flex gap-4 lg:mt-0">
                <button
                  ref={prevRef}
                  aria-label="Previous slide"
                  className="rounded-full border-2 border-primary p-3 text-primary transition hover:bg-primary hover:text-dark"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="size-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  ref={nextRef}
                  aria-label="Next slide"
                  className="rounded-full border-2 border-primary p-3 text-primary transition hover:bg-primary hover:text-dark"
                >
                  <svg
                    className="size-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
          <div className="mt-8 mx-0">
            <div ref={sliderRef} className="keen-slider">
              {slidesData.map((slide, index) => (
                <motion.div
                  key={index}
                  className="keen-slider__slide"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeVariants}
                  transition={{ delay: index * 0.2, duration: 0.99 }}
                >
                  <blockquote className="flex h-full flex-col justify-between bg-dark p-6 shadow-sm sm:p-8 lg:p-12">
                    <div>
                      <div className="flex gap-0.5 text-primary">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-white sm:text-3xl">
                          {slide.title}
                        </p>
                        <p className="mt-4 leading-relaxed text-white font-RobotoMono">
                          {slide.content}
                        </p>
                      </div>
                    </div>
                    <footer className="mt-4 text-sm font-medium text-white sm:mt-6">
                      &mdash; {slide.author}
                    </footer>
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
