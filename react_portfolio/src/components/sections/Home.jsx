import React, { useState, useEffect, useRef } from "react";
import RevealOnScroll from "../RevealOnScroll";
import image from "../../assets/Shivam_whitebg.jpg";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const roles = useRef([
    "a Full-Stack Developer",
    "a Frontend Specialist",
    "a UI/UX Designer",
    "a Web Enthusiast",
  ]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timeout;
    const currentText = roles.current[currentRoleIndex % roles.current.length];
    const prefix = "I'm ";

    if (isTyping) {
      if (displayText.length < (prefix + currentText).length) {
        timeout = setTimeout(() => {
          setDisplayText(
            (prefix + currentText).substring(0, displayText.length + 1)
          );
        }, 100 + Math.random() * 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > prefix.length) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setCurrentRoleIndex(currentRoleIndex + 1);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentRoleIndex, isTyping]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 max-w-6xl mx-auto">
          {/* Image on Right */}
          <img
            src={image}
            alt="Shivam Thakre"
            className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-blue-500"
          />

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm Shivam Thakre
            </h1>

            <h5 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mt-4">
              {displayText}
              <span
                className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}
              >
                |
              </span>
            </h5>

            <p className="text-gray-400 text-lg mt-6 mb-8 max-w-lg">
              I craft digital experiences that are fast, intuitive, and
              beautiful. Currently focused on building responsive web
              applications with modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/1EPfHSY7IJW43yHCKYB5JLZ-MZzOouHgy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
              >
                View Resume
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-500/30 hover:border-blue-500/70 text-blue-400 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 hover:bg-blue-500/20"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
