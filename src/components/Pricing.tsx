import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter Plan",
    price: "$4,999",
    tag: "MOST PICK",
    description:
      "Our basic pricing plan is designed to offer extra-ordinary value and features.",
    dark: false,
  },
  {
    name: "Growth Plan",
    price: "$6,999",
    description:
      "Our pro pricing plan is designed for businesses with advanced features.",
    dark: false,
  },
  {
    name: "Premium Plan",
    price: "$8,999",
    description:
      "Our plus pricing plan is designed for corporate with premium support.",
    dark: true,
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#f6f6f6]">

      {/* Header */}
      <div className="text-center mb-12 md:mb-16">

        <span className="bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm">
          Premium Plans
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mt-4 md:mt-6">
          Feasible Plans.
        </h2>

        <p className="text-sm sm:text-base text-gray-500 mt-4 max-w-xl mx-auto">
          Transparent pricing tailored to your needs. Let's discuss your project
          and find a plan that works for you.
        </p>

        <div className="flex justify-center mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white shadow-md px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:shadow-lg transition text-sm md:text-base"
          >
            <span className="bg-red-500 text-white p-2 rounded-full">
              <ArrowRight size={16}/>
            </span>
            Contact now
          </motion.button>
        </div>

      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className={`group relative rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition ${
              plan.dark
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >

            {/* Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 to-pink-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition"></div>

            <div className="relative">

              {/* Price */}
              <h3 className="text-2xl md:text-3xl font-semibold">
                {plan.price}
                <span className="text-xs md:text-sm text-gray-400 ml-2">
                  /year
                </span>
              </h3>

              {/* Plan */}
              <div className="mt-4 md:mt-6 flex items-center gap-2 flex-wrap">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>

                <h4 className="font-semibold text-sm md:text-base">
                  {plan.name}
                </h4>

                {plan.tag && (
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-black">
                    {plan.tag}
                  </span>
                )}
              </div>

              <p className={`mt-3 md:mt-4 text-sm ${
                plan.dark ? "text-gray-300" : "text-gray-500"
              }`}>
                {plan.description}
              </p>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                className={`flex items-center gap-3 mt-5 md:mt-6 px-5 py-2.5 md:py-3 rounded-full transition ${
                  plan.dark
                    ? "bg-white text-black"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <span className="bg-red-500 text-white p-2 rounded-full">
                  <ArrowRight size={16}/>
                </span>
                Subscribe Now
              </motion.button>

              {/* Features */}
              <div className={`mt-6 md:mt-8 p-4 md:p-5 rounded-xl space-y-3 ${
                plan.dark ? "bg-white/10" : "bg-gray-50"
              }`}>

                <h5 className="font-semibold text-sm md:text-base">
                  What's included
                </h5>

                <div className="flex items-center gap-2 text-sm">
                  <Check className="text-red-500" size={16}/>
                  All templates unlocked
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Check className="text-red-500" size={16}/>
                  Unlimited requests
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Check className="text-red-500" size={16}/>
                  Unlimited revisions
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <X className="text-gray-400" size={16}/>
                  Project management
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <X className="text-gray-400" size={16}/>
                  Access to all services
                </div>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Pricing;