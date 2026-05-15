import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const Intro: React.FC = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  // Mouse Parallax Effect (disabled on mobile)
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;

      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.01;
      const moveY = (clientY - window.innerHeight / 2) * 0.01;

      if (ref.current) {
        ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouse);

    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="min-h-screen bg-linear-to-b from-[#f8fafc] to-[#eef2ff] px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-28 relative overflow-hidden">

      {/* Animated Background */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute -top-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-linear-to-r from-pink-300 to-purple-300 rounded-full blur-3xl opacity-40"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-linear-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl opacity-40"
      />

      {/* Small Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-sm text-gray-600 mb-8 md:mb-12"
      >
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        Hey, Just An Intro
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight max-w-5xl"
      >
        I'm a creative{" "}
        <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Web Developer
        </span>{" "}
        passionate about building modern digital experiences.
      </motion.h1>

      {/* Button */}
      <div className="mt-8 md:mt-10">
        <button
          onClick={() => navigate("/contact")}
          className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:scale-105 transition"
        >
          Contact
        </button>
      </div>

      {/* Animated Numbers */}
      <div className="grid grid-cols-3 sm:flex gap-6 md:gap-10 mt-12 md:mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-900">
            6+
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Months Experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-900">
            5+
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-900">
            10+
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Clients
          </p>
        </motion.div>
      </div>

      {/* Glass Cards */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-10 mt-12 md:mt-20">

        <motion.div
          whileHover={{ y: -10 }}
          className="backdrop-blur-xl bg-white/30 border border-white/20 p-6 md:p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            Building Modern Web Apps
          </h3>

          <p className="text-gray-600 text-sm md:text-base">
            I build scalable apps using React, Node and modern tools.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          className="backdrop-blur-xl bg-white/30 border border-white/20 p-6 md:p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            Let's Build Together
          </h3>

          <p className="text-gray-600 text-sm md:text-base">
            I collaborate with startups & businesses worldwide.
          </p>
        </motion.div>

      </div>

      {/* Tech Stack Icons */}
      <motion.div
        ref={ref}
        className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 mt-12 md:mt-16 text-3xl md:text-4xl text-gray-700"
      >
        <FaReact />
        <SiTypescript />
        <FaNodeJs />
        <SiTailwindcss />
        <FaGithub />
      </motion.div>

    </section>
  );
};

export default Intro;