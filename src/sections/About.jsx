import React from "react";
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
    SiMysql,
} from "react-icons/si";

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
                            <p className="text-2xl mt-5 font-semibold font-RobotoMono leading-7 text-primary">
                                Abour Me
                            </p>
                            <h1 className="mt-4 text-3xl font-bold tracking-tight font-outfit text-white sm:text-4xl">
                                Experienced Web Developer
                            </h1>
                            <p className="mt-6 text-md leading-8 text-white font-RobotoMono">
                                A skilled web developer based in Rabat, Morocco,
                                this individual combines creativity with
                                technical expertise to create responsive,
                                user-friendly websites that reflect Moroccan
                                culture while staying up-to-date with the latest
                                web development trends. Their work showcases
                                sleek designs and seamless functionality, with a
                                strong emphasis on quality and attention to
                                detail.
                            </p>
                            <p className="text-md leading-8 text-white font-RobotoMono mt-5">
                                <span className="text-primary">
                                    Passionate about innovation
                                </span>
                                , they explore new technologies to enhance user
                                experience, specializing in visually engaging,
                                high-performance websites optimized for
                                accessibility. Committed to collaboration and
                                clear communication, they aim to transform ideas
                                into reality, delivering solutions that empower
                                clients to achieve their digital goals.
                            </p>
                            <button
                                className="flex gap-2 mt-5 items-center text-darker bg-primary/80 backdrop-blur-md rounded-sm py-3 px-7 font-semibold transition duration-500 ms-1 hover:bg-primary/100 hover:bg-opacity-80 hover:backdrop-blur-lg"
                                href="#"
                            >
                                <FaDownload /> Download My CV
                            </button>
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
            </div>
            <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-10 w-full">
                <FaHtml5
                    className="text-orange-600 w-16 h-16 mx-auto"
                    title="HTML5"
                />
                <FaCss3Alt
                    className="text-blue-600 w-16 h-16 mx-auto"
                    title="CSS3"
                />
                <FaReact
                    className="text-cyan-500 w-16 h-16 mx-auto"
                    title="React"
                />
                <FaVuejs
                    className="text-green-500 w-16 h-16 mx-auto"
                    title="Vue.js"
                />
                <FaLaravel
                    className="text-red-600 w-16 h-16 mx-auto"
                    title="Laravel"
                />
                <FaNodeJs
                    className="text-green-600 w-16 h-16 mx-auto"
                    title="Node.js"
                />
                <FaPython
                    className="text-yellow-500 w-16 h-16 mx-auto"
                    title="Python"
                />
                <FaPhp
                    className="text-purple-600 w-16 h-16 mx-auto"
                    title="PHP"
                />
                <FaJava
                    className="text-red-500 w-16 h-16 mx-auto"
                    title="Java"
                />
                <SiMongodb
                    className="text-green-500 w-16 h-16 mx-auto"
                    title="MongoDB"
                />
                <SiJavascript
                    className="text-yellow-500 w-16 h-16 mx-auto"
                    title="JavaScript"
                />
                <SiTypescript
                    className="text-blue-500 w-16 h-16 mx-auto"
                    title="TypeScript"
                />
                <SiDjango
                    className="text-green-700 w-16 h-16 mx-auto"
                    title="Django"
                />
                <SiWordpress
                    className="text-blue-600 w-16 h-16 mx-auto"
                    title="WordPress"
                />
                <SiDocker
                    className="text-blue-500 w-16 h-16 mx-auto"
                    title="Docker"
                />
                <SiGit className="text-red-600 w-16 h-16 mx-auto" title="Git" />
            </div>
        </section>
    );
};

export default About;
