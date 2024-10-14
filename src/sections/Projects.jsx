import React from "react";
import { motion } from "framer-motion";
import SubTitle from "../components/SubTitle";
import TitlePrimary from "../components/TitlePrimary";
import MyButton from "../components/MyButton";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="projects">
      <div className="bg-transparent py-24 sm:py-32">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <SubTitle text="Deploy faster" />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <TitlePrimary text="Design, branding & web development projects" />
        </motion.div>

        <motion.div
          className="mx-auto max-w-screen-xl py-8 sm:py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.ul
            className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                src: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                text: "Modern E-commerce Web App UI/UX Design",
              },
              {
                src: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                text: "Seamless Mobile Web Experience for Fashion Retail",
              },
              {
                src: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                text: "Intuitive Crypto Dashboard UI/UX for Digital Assets Management",
              },
            ].map((project, index) => (
              <motion.li
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <div className="group relative block">
                  <img
                    src={project.src}
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-md mb-3 font-medium text-white bg-darker/40 p-5 font-RobotoMono">
                      {project.text}
                    </h3>
                    <MyButton
                      type="button"
                      color="bg-darker"
                      textColor="text-white"
                      text="Discover"
                    />
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <MyButton type="button" color="bg-primary" text="More projects" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
