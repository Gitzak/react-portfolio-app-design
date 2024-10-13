import React from "react";

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
              <p className="text-2xl mt-5 font-semibold leading-7 text-lime-600">
                Professional Expertise
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Experienced Web Developer
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                A skilled web developer based in Rabat, Morocco, focused on
                creating responsive, user-friendly websites. Blending creativity
                with technical expertise, they deliver digital experiences that
                reflect Moroccan culture while embracing the latest web
                development trends. From sleek designs to seamless
                functionality, their work exemplifies quality and attention to
                detail.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1551583899-d3f6258ec7c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[30rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 md:w-[35rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-white lg:max-w-lg">
              <p className="text-lg leading-8 text-white">
                With a passion for innovation, this developer stays ahead of the
                curve, continually exploring new technologies to enhance the
                user experience. They specialize in crafting websites that are
                not only visually engaging but also optimized for performance
                and accessibility. Committed to delivering excellence, they
                bring a unique perspective shaped by their cultural background
                and technical skills.
              </p>
              <p className="mt-6 text-lg leading-8 text-white">
                Whether building a new site from scratch or enhancing an
                existing one, they prioritize collaboration and clear
                communication. Their goal is to turn ideas into reality,
                creating solutions that help clients achieve their digital
                ambitions. With each project, they strive to make a positive
                impact, one website at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
