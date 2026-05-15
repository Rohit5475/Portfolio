import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Benefits: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#f6f6f6]">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-10 md:mb-14">
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          Benefits of Hiring Me
        </div>

        <p className="text-sm text-gray-500">©2025</p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1 */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[420px] md:min-h-[480px]"
        >
          <div>
            <p className="text-sm text-gray-600">
              It takes 5.1 Minutes to launch your site.
            </p>

            <p className="text-xs text-gray-400 mt-2">
              Lightning-fast delivery without compromising quality
            </p>
          </div>

          <div className="relative my-6">
            <img
              src="https://images.unsplash.com/photo-1493238792000-8113da705763"
              className="w-full h-40 md:h-55 object-cover rounded-xl"
            />

            <button className="absolute top-4 right-4 bg-red-500 text-white p-2 md:p-3 rounded-full shadow-lg">
              <ArrowUpRight size={18} />
            </button>
          </div>

          <h3 className="font-semibold text-lg">
            VIPER*
          </h3>
        </motion.div>


        {/* Card 2 */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[420px] md:min-h-[480px] text-center"
        >
          <div>
            <p className="text-xs text-gray-400">
              FROM 0 TO 100 IN ONE SMALL STEP
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold mt-3 leading-tight">
              All in one platform
            </h3>
          </div>

          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            className="w-full h-48 md:h-65 object-cover rounded-xl mt-4"
          />
        </motion.div>


        {/* Card 3 */}
        <motion.div
          whileHover={{ y: -8 }}
          className="bg-black text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[420px] md:min-h-[480px]"
        >
          <div>
            <p className="text-sm text-gray-300">
              FULL TIME SUPPORT
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-2">
              24/6
            </h3>

            <div className="text-red-500 mt-2">
              ★★★★★
            </div>

            <p className="text-gray-400 mt-4 text-sm">
              I have a custom application for 24/6 support and you
              will get update anytime.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
            className="w-full h-40 md:h-55 object-cover rounded-xl mt-4"
          />
        </motion.div>

      </div>

    </section>
  );
};

export default Benefits;