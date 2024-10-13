import React from "react";
import Logo from "../components/Logo";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = ({ setSelectedPage }) => {
    return (
        <footer className="bg-dark/20 border-t-2 border-dark">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-primary sm:justify-start">
                        <AnchorLink
                            className="me-2"
                            onClick={() => setSelectedPage("home")}
                            href="#home"
                        >
                            <Logo />
                        </AnchorLink>
                    </div>

                    <p className="mt-4 text-center text-sm text-secondary lg:mt-0 lg:text-right">
                        Copyright &copy; 2024. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
