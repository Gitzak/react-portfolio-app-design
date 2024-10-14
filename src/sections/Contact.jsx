import React from "react";
import { motion } from "framer-motion";
import MyButton from "../components/MyButton";
import { FaPaperPlane } from "react-icons/fa";
import SubTitle from "../components/SubTitle";
import TitlePrimary from "../components/TitlePrimary";

const Contact = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="contact" className="bg-transparent">
      <div className="mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
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
              <SubTitle text="Contact Me" />
              <TitlePrimary text="Let’s Bring Your Project to Life" />
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
              <p className="max-w-xl text-lg mt-5 font-RobotoMono">
                If you're ready to start a project or have questions, fill out
                the form below to get in touch. I'll get back to you as soon as
                possible!
              </p>
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
              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-primary">
                  +2126 66 66 66 66
                </a>
                <address className="mt-2 not-italic font-RobotoMono">
                  282 Oudaya Rabat, Morocco, MA 14000
                </address>
              </div>
            </motion.div>
          </div>

          <div className="rounded-lg bg-dark p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4 font-RobotoMono">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={formVariants}
              >
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-2 border-secondary p-3 text-sm bg-transparent text-white 
            focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </motion.div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={formVariants}
                >
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-2 border-secondary p-3 text-sm bg-transparent text-white 
              focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </motion.div>

                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={formVariants}
                >
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-2 border-secondary p-3 text-sm bg-transparent text-white 
              focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </motion.div>
              </div>

              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={formVariants}
              >
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg border-2 border-secondary p-3 text-sm bg-transparent text-white 
            focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </motion.div>

              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={formVariants}
              >
                <MyButton
                  type="submit"
                  color="bg-primary"
                  text="Send message"
                  icon={<FaPaperPlane />}
                />
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
