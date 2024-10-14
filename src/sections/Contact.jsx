import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import MyButton from "../components/MyButton";
import { FaPaperPlane } from "react-icons/fa";
import SubTitle from "../components/SubTitle";
import TitlePrimary from "../components/TitlePrimary";

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

const validationRules = {
  name: { required: "Name is required" },
  email: {
    required: "Email is required",
    pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
  },
  phone: { required: "Phone number is required" },
  message: { required: "Message is required" },
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
    reset,
  } = useForm({ mode: "onBlur" });
  const [isMessageSent, setIsMessageSent] = useState(false);

  const onSubmit = (data) => {
    if (isValid) {
      setIsMessageSent(true);
      reset();
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setTimeout(() => {
        setIsMessageSent(false);
      }, 3000);
    }
  }, [isSubmitSuccessful]);

  const renderInput = (id, type, placeholder, validation) => (
    <>
      <input
        {...register(id, validation)}
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-lg border-2 p-3 text-sm bg-transparent text-white 
          focus:outline-none focus:ring-2 focus:ring-secondary 
          ${errors[id] ? "border-red-500" : "border-secondary"}`}
      />
      {errors[id] && (
        <p className="text-red-500 text-sm">{errors[id].message}</p>
      )}
    </>
  );

  return (
    <section id="contact" className="bg-transparent">
      <div className="mx-auto max-w-screen-xl px-2 py-24 sm:px-6 lg:px-8">
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

          <div className="rounded-lg bg-dark p-3 shadow-lg lg:col-span-3 lg:p-12">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 font-RobotoMono"
            >
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={formVariants}
              >
                {renderInput("name", "text", "Name", validationRules.name)}
              </motion.div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={formVariants}
                >
                  {renderInput(
                    "email",
                    "email",
                    "Email address",
                    validationRules.email
                  )}
                </motion.div>
                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={formVariants}
                >
                  {renderInput(
                    "phone",
                    "tel",
                    "Phone Number",
                    validationRules.phone
                  )}
                </motion.div>
              </div>
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={formVariants}
              >
                <textarea
                  {...register("message", validationRules.message)}
                  placeholder="Message"
                  rows="8"
                  className={`w-full rounded-lg border-2 p-3 text-sm bg-transparent text-white 
                    focus:outline-none focus:ring-2 focus:ring-secondary 
                    ${errors.message ? "border-red-500" : "border-secondary"}`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </motion.div>
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={formVariants}
              >
                {isMessageSent && (
                  <p className="text-green-500 mb-4 text-md">
                    Message sent successfully!
                  </p>
                )}

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
