import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tjk9283", 
        "template_7x8m50o", 
        e.target,
        "Qm1m2nVWsO7yu_nHz" 
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          e.target.reset(); 
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#1a0933] to-[#0c0b2c] text-white px-6 py-16 flex flex-col items-center pt-40"
      id="contacts"
    >
      <div className="text-center mb-12 mt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          I'm always open to discussing new opportunities and interesting projects
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl">
        <div className="bg-[#151e30] p-8 rounded-xl flex-1 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send me a message</h2>
          <form className="space-y-6" onSubmit={sendEmail}>
            <input
              type="text"
              name="name" // Matches {{name}} in template
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-[#1f2a45] text-white border border-purple-500 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email" // Matches {{email}} in template
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-[#1f2a45] text-white border border-purple-500 focus:outline-none"
              required
            />
            <textarea
              name="content" // Matches {{content}} in template
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-md bg-[#1f2a45] text-white border border-purple-500 focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-md hover:opacity-90 transition"
            >
              <span>🚀</span> Send Message
            </button>
          </form>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Let's connect!</h2>
          <p className="text-gray-300 mb-8">
            I'm always excited to work on new projects and collaborate with amazing
            people. Feel free to reach out through any of these channels.
          </p>
          <div className="space-y-6">
            <a
              href="mailto:csnandana95@gmail.com"
              className="flex items-center gap-4 bg-[#1f2a45] p-4 rounded-md hover:bg-[#2c3557] transition"
              rel="noopener noreferrer"
            >
              <MdEmail className="text-pink-500 text-2xl" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-300">csnandana95@gmail.com</p>
              </div>
            </a>
            <a
              href="https://github.com/NANDANA-CS"
              className="flex items-center gap-4 bg-[#1f2a45] p-4 rounded-md hover:bg-[#2c3557] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-pink-500 text-2xl" />
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="text-gray-300">github.com/NANDANA-CS</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/nandana-cs-a31b4829b"
              className="flex items-center gap-4 bg-[#1f2a45] p-4 rounded-md hover:bg-[#2c3557] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-pink-500 text-2xl" />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <p className="text-gray-300">
                  linkedin.com/in/nandana-cs-a31b4829b
                </p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/nandanaaaa.___"
              className="flex items-center gap-4 bg-[#1f2a45] p-4 rounded-md hover:bg-[#2c3557] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 text-2xl" />
              <div>
                <p className="font-semibold">Instagram</p>
                <p className="text-gray-300">@nandanaaaa.___</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;