import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {" "}
      {/* Background */}{" "}
      <div className="absolute inset-0">
        {" "}
        <img
          src="/hero3.png"
          className="w-full h-full object-cover"
          alt="Hero Background"
        />{" "}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />{" "}
      </div>{" "}
      {/* Main Content */}{" "}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20">
        {" "}
        {/* Hero Text */}{" "}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[110px] font-bold leading-tight bg-linear-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
        >
          {" "}
          Rohit's Portfolio{" "}
        </motion.h1>{" "}
        {/* Description */}{" "}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 md:mt-6 max-w-md"
        >
          {" "}
          Creative Web Developer building modern, scalable and high performance
          applications.{" "}
        </motion.p>{" "}
        {/* Buttons */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8"
        >
          {" "}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/projects")}
            className="bg-linear-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg text-sm md:text-base"
          >
            {" "}
            View Projects{" "}
          </motion.button>{" "}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="border border-white px-6 py-3 rounded-lg text-sm md:text-base"
          >
            {" "}
            Contact Me{" "}
          </motion.button>{" "}
        </motion.div>{" "}
      </div>{" "}
      {/* Floating Tech Badges */}{" "}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2 md:gap-4 px-4"
      >
        {" "}
        {["React", "TypeScript", "Node.js", "Tailwind"].map((tech, index) => (
          <motion.span
            key={index}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            className="bg-black/70 backdrop-blur-md px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm rounded-lg"
          >
            {" "}
            {tech}{" "}
          </motion.span>
        ))}{" "}
      </motion.div>{" "}
      {/* Right Side Text (Hidden on mobile) */}{" "}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="hidden lg:block absolute right-10 bottom-32 max-w-sm text-right"
      >
        {" "}
        <p className="text-gray-300 text-sm lg:text-base">
          {" "}
          I'm a full-stack web developer specializing in React, Next.js and
          modern web technologies.{" "}
        </p>{" "}
      </motion.div>{" "}
    </section>
  );
};
export default Hero;
