import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  year: string;
  tag: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Raven Claw",
    year: "2025",
    tag: "Portfolio",
    image:
      "https://images.unsplash.com/photo-1581636625402-29b2a704ef13",
  },
  {
    title: "Velocity Car",
    year: "2025",
    tag: "Studio",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
  },
  {
    title: "Creative Brand",
    year: "2024",
    tag: "Design",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    title: "Product Visual",
    year: "2024",
    tag: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const Projects: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-b from-[#f8fafc] to-[#eef2ff] relative overflow-hidden">

      {/* Floating Background */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-20 left-0 w-72 md:w-96 h-72 md:h-96 bg-purple-300 rounded-full blur-3xl opacity-30"
      />

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-pink-300 rounded-full blur-3xl opacity-30"
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-20"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold text-gray-900">
          Featured Projects
        </h2>

        <p className="text-sm sm:text-base text-gray-500 mt-3 md:mt-4 max-w-xl mx-auto">
          Explore a collection of high-quality, innovative designs crafted to elevate brands.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -12 }}
            className="group relative rounded-2xl"
          >
            {/* Glow Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative backdrop-blur-xl bg-white/40 border border-white/20 p-2 sm:p-3 rounded-2xl shadow-lg">

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl w-full h-56 sm:h-64 md:h-72 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-black px-4 sm:px-6 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base font-medium"
                  >
                    View Project
                    <ArrowRight size={16} />
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="flex justify-between mt-4 sm:mt-5 items-center">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {project.year}
                  </p>
                </div>

                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-xs sm:text-sm bg-white/70 backdrop-blur-md px-2 sm:px-3 py-1 rounded-full"
                >
                  {project.tag}
                </motion.span>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Projects;