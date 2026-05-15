import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";

const Skills: React.FC = () => {
  return (
    <section className="py-20 md:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-b from-[#f8fafc] to-[#eef2ff] relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute -top-20 left-0 w-72 md:w-[400px] h-72 md:h-[400px] bg-pink-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 md:w-[350px] h-64 md:h-[350px] bg-blue-200 rounded-full blur-3xl opacity-30"></div>

      {/* Heading */}
      <motion.div
        initial={{opacity:0 , y:30}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.6}}
        className="mb-12 md:mb-16"
      >
        <p className="text-sm text-gray-500 mb-3">
          My Expertise
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 max-w-3xl leading-tight">
          I build modern, scalable and high-performance applications
          with clean design and smooth user experiences.
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        
        {/* Frontend */}
        <motion.div
          whileHover={{ y: -10 }}
          initial={{opacity:0 , y:40}}
          whileInView={{opacity:1 , y:0}}
          transition={{delay:0.2}}
          className="group relative backdrop-blur-xl bg-white/30 border border-white/20 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
        >
          {/* Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition"></div>

          <div className="relative">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Frontend Development
            </h3>

            <p className="text-gray-600 text-sm md:text-base">
              Building responsive and interactive interfaces using modern technologies.
            </p>

            <div className="flex gap-4 mt-6 text-2xl md:text-3xl text-gray-700">
              <FaReact />
              <SiTypescript />
              <SiTailwindcss />
            </div>
          </div>

        </motion.div>

        {/* Backend */}
        <motion.div
          whileHover={{ y: -10 }}
          initial={{opacity:0 , y:40}}
          whileInView={{opacity:1 , y:0}}
          transition={{delay:0.4}}
          className="group relative backdrop-blur-xl bg-white/30 border border-white/20 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition"></div>

          <div className="relative">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Backend Development
            </h3>

            <p className="text-gray-600 text-sm md:text-base">
              Developing secure and scalable backend services and APIs.
            </p>

            <div className="flex gap-4 mt-6 text-2xl md:text-3xl text-gray-700">
              <FaNodeJs />
              <SiMongodb />
              <FaGithub />
            </div>
          </div>

        </motion.div>

        {/* Tools */}
        <motion.div
          whileHover={{ y: -10 }}
          initial={{opacity:0 , y:40}}
          whileInView={{opacity:1 , y:0}}
          transition={{delay:0.6}}
          className="group relative backdrop-blur-xl bg-white/30 border border-white/20 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition"></div>

          <div className="relative">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Tools & Technologies
            </h3>

            <p className="text-gray-600 text-sm md:text-base">
              Tools that help me deliver high quality apps.
            </p>

            <div className="flex gap-4 mt-6 text-2xl md:text-3xl text-gray-700">
              <FaGithub />
              <SiTailwindcss />
              <FaReact />
            </div>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Skills;