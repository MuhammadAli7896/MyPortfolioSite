import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faHackerrank } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="text-white py-6">
            <div className="container mx-auto flex justify-between items-center" id="maindiv">
                <p className="text-sm" id="ptag">&copy; 2023 &nbsp; &nbsp; Muhammad Ali</p>

                <div className="flex gap-8" id="linksdiv">
                    <a href="https://github.com/MuhammadAli7896/" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="text-xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-ali-a772a025b/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                    </a>
                    <a href="https://www.hackerrank.com/muhammadali30804" target="_blank">
                        <FontAwesomeIcon icon={faHackerrank} className="text-xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
