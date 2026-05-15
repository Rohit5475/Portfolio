import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#f6f6f6]">

      {/* Top */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-10 md:mb-14">
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          Let's Work Together
        </div>

        <p className="text-sm text-gray-500">©2025</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* Left Side */}
        <motion.div
          initial={{opacity:0 , x:-50}}
          whileInView={{opacity:1 , x:0}}
          transition={{duration:0.6}}
        >

          <span className="bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm">
            Contact Now
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mt-4 md:mt-6">
            Contact Me!
          </h2>

          <p className="text-gray-500 mt-4 max-w-md text-sm md:text-base">
            Let's create something amazing together! Reach out I'd love
            to hear about your project and ideas.
          </p>

          {/* Features */}
          <div className="mt-6 md:mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <span className="bg-red-100 text-red-500 w-6 h-6 flex items-center justify-center rounded-full">
                +
              </span>
              24/7 Full Time Support
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-red-100 text-red-500 w-6 h-6 flex items-center justify-center rounded-full">
                +
              </span>
              Available Worldwide
            </div>

          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white shadow-md px-5 md:px-6 py-3 rounded-full mt-6 md:mt-8 hover:shadow-lg transition text-sm md:text-base"
          >
            <span className="bg-red-500 text-white p-2 rounded-full">
              <ArrowRight size={16}/>
            </span>
            Contact now
          </motion.button>

        </motion.div>


        {/* Right Side Form */}
        <motion.div
          initial={{opacity:0 , x:50}}
          whileInView={{opacity:1 , x:0}}
          transition={{duration:0.6}}
        >

          <div className="space-y-4 md:space-y-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm">

            <input
              type="text"
              placeholder="Name*"
              className="w-full p-3 md:p-4 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-red-400 transition"
            />

            <input
              type="email"
              placeholder="Email*"
              className="w-full p-3 md:p-4 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-red-400 transition"
            />

            <textarea
              placeholder="Message*"
              rows={5}
              className="w-full p-3 md:p-4 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-red-400 transition"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full bg-black text-white py-3 md:py-4 rounded-lg hover:opacity-90 transition"
            >
              Submit Now
            </motion.button>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Contact;