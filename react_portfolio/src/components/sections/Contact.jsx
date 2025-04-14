import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaDiscord,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const SERVICE_ID = "service_x1pfyif";
  const TEMPLATE_ID = "template_6uuhk4u";
  const PUBLIC_KEY = "XhyI-M893aukeHBZB";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  const socialLinks = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      url: "https://mail.google.com/mail/u/0/#inbox",
      color: "hover:text-red-400",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      url: "https://github.com/Shivam8175",
      color: "hover:text-gray-400",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/feed/",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      label: "Twitter",
      url: "https://twitter.com/yourhandle",
      color: "hover:text-sky-400",
    },
    {
      icon: <FaFacebook className="text-2xl" />,
      label: "Facebook",
      url: "https://facebook.com/yourprofile",
      color: "hover:text-blue-600",
    },
    {
      icon: <SiLeetcode className="text-2xl" />,
      label: "LeetCode",
      url: "https://leetcode.com/u/Shivam_thakre/",
      color: "hover:text-orange-400",
    },
    {
      icon: <FaDiscord className="text-2xl" />,
      label: "Discord",
      url: "https://discord.com/users/yourid",
      color: "hover:text-indigo-500",
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      label: 8103714517,
      color: "hover:text-indigo-400",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <RevealOnScroll>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Feel free to reach out through any of these platforms. I'm always
              open to discussing new projects, creative ideas or opportunities
              to be part of your vision.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${social.color} hover:bg-white/5 hover:scale-105`}
                >
                  {social.icon}
                  <span className="text-white">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Send Me a Message
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Your Name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Your Email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="number"
                  name="number"
                  required
                  value={formData.number}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Your Number"
                  onChange={(e) =>
                    setFormData({ ...formData, number: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Your Message"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;
