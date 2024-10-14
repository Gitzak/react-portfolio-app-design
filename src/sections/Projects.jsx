import React from "react";
import SubTitle from "../components/SubTitle";
import TitlePrimary from "../components/TitlePrimary";
import MyButton from "../components/MyButton";

const Projects = () => {
  return (
    <section id="projects">
      <div className="bg-transparent py-24 sm:py-32">
        <div className="mx-auto">
          <SubTitle text="Deploy faster" />
          <TitlePrimary text="Design, branding & web development projects" />
          <div className="mx-auto max-w-screen-xl py-8 sm:py-12">
            <ul className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <li>
                <div className="group relative block">
                  <img
                    src="https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-md mb-3 font-medium text-white bg-darker/40 p-5 font-RobotoMono">
                      Modern E-commerce Web App UI/UX Design
                    </h3>

                    <MyButton
                      type="button"
                      color="bg-darker"
                      textColor="text-white"
                      text="Discover"
                    />
                  </div>
                </div>
              </li>

              <li>
                <div className="group relative block">
                  <img
                    src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-md mb-3 font-medium text-white bg-darker/40 p-5 font-RobotoMono">
                      Seamless Mobile Web Experience for Fashion Retail
                    </h3>

                    <MyButton
                      type="button"
                      color="bg-darker"
                      textColor="text-white"
                      text="Discover"
                    />
                  </div>
                </div>
              </li>

              <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                <div className="group relative block">
                  <img
                    src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-md mb-3 font-medium text-white bg-darker/40 p-5 font-RobotoMono">
                      Intuitive Crypto Dashboard UI/UX for Digital Assets
                      Management
                    </h3>

                    <MyButton
                      type="button"
                      color="bg-darker"
                      textColor="text-white"
                      text="Discover"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <MyButton type="button" color="bg-primary" text="More projects" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
