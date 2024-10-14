import React from "react";
import MyButton from "../components/MyButton";
import { FaPaperPlane } from "react-icons/fa";
import SubTitle from "../components/SubTitle";
import TitlePrimary from "../components/TitlePrimary";

const Contact = () => {
  return (
    <section id="contact" className="bg-transparent">
      <div className="mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <SubTitle text="Contact Me" />
            <TitlePrimary text="Let’s Bring Your Project to Life" />
            <p className="max-w-xl text-lg mt-5 font-RobotoMono">
              If you're ready to start a project or have questions, fill out the
              form below to get in touch. I'll get back to you as soon as
              possible!
            </p>
            <div className="mt-8">
              <a href="#" className="text-2xl font-bold text-primary">
                +2126 66 66 66 66
              </a>
              <address className="mt-2 not-italic font-RobotoMono">
                282 Oudaya Rabat, Morocco, MA 14000
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-dark p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4 font-RobotoMono">
              <div>
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
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
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
                </div>

                <div>
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
                </div>
              </div>

              <div>
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
              </div>

              <div className="mt-4">
                <MyButton
                  type="submit"
                  color="bg-primary"
                  text="Send message"
                  icon={<FaPaperPlane />}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
