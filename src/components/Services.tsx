import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Service {
  title: string;
  category: string;
  image: string;
  level: number;
}

const services: Service[] = [
  {
    title: "Frontend Development",
    category: "React / Next.js",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    level: 4,
  },
  {
    title: "Backend Development",
    category: "Node / Express",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    level: 4,
  },
  {
    title: "Full Stack Development",
    category: "MERN Stack",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    level: 4,
  },
  {
    title: "UI/UX Design",
    category: "Modern Interfaces",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698",
    level: 3,
  },
  {
    title: "API Development",
    category: "REST / GraphQL",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    level: 3,
  },
  {
    title: "Performance Optimization",
    category: "Speed & SEO",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    level: 3,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 px-6 sm:px-8 md:px-12 lg:px-16 bg-linear-to-b from-white to-gray-100 relative overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12 md:mb-20"
      >
        <span className="text-sm text-gray-500 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Services
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mt-4 text-gray-900">
          What I Offer
        </h2>

        <p className="text-sm sm:text-base text-gray-500 mt-4 max-w-xl mx-auto">
          Professional web development services focused on building modern,
          scalable and high-performance applications.
        </p>
      </motion.div>


      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Developer Services
          </h3>

          <p className="text-gray-500 mt-4 max-w-md text-sm md:text-base">
            I design and develop modern, scalable, and high-performance
            web applications using cutting-edge technologies.
          </p>

          <div className="mt-6 md:mt-8 space-y-4">

            {[
              "Modern & Scalable Architecture",
              "Fast & Optimized Performance",
              "Clean & Maintainable Code",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="bg-blue-100 p-2 rounded-full text-blue-500">
                  +
                </span>
                {item}
              </div>
            ))}

          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/about")}
            className="flex items-center gap-3 bg-white shadow-lg px-5 md:px-6 py-3 rounded-full mt-6 md:mt-8 hover:shadow-xl transition text-sm md:text-base"
          >
            <span className="bg-blue-500 text-white p-2 rounded-full">
              <ArrowRight size={16} />
            </span>
            View About
          </motion.button>

        </motion.div>


        {/* Right */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="space-y-3 md:space-y-4"
        >

          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ x: 8 }}
              className="bg-white/80 backdrop-blur-xl p-3 md:p-4 rounded-xl flex items-center justify-between shadow-sm hover:shadow-md transition"
            >

              <div className="flex items-center gap-3 md:gap-4">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover"
                />

                <div>
                  <h4 className="font-semibold text-sm md:text-base">
                    {service.title}
                  </h4>

                  <p className="text-xs md:text-sm text-gray-500">
                    {service.category}
                  </p>
                </div>

              </div>

              {/* Dots */}
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < service.level
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Services;