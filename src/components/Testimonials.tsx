import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Eddie Brock",
    role: "CEO",
    company: "Royal Kingdope",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "With clive user-friendly CRM, our sales team can now work smarter, not harder.",
  },
  {
    name: "John Fitzgerald",
    role: "Manager",
    company: "Microsoft Solutions",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "I was amazed by how intuitive and user-friendly everything felt.",
  },
  {
    name: "Ellie Sattler",
    role: "Designer",
    company: "Nvidia Graphics",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The process was smooth and easy. They listened to all my needs.",
  },
  {
    name: "Kate Mcallister",
    role: "Home Advisor",
    company: "Interior Studio",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "We've seen increase in site traffic, lead generation, and sales.",
  },
  {
    name: "Tina Rossell",
    role: "Product Manager",
    company: "Adobe",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    text: "Expert developer turned my designs into beautiful websites.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#f6f6f6]">

      {/* Top */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-10 md:mb-12">
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          Voices About Me
        </div>

        <p className="text-sm text-gray-500">©2025</p>
      </div>

      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">

        <span className="bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm">
          Testimonial
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mt-4 md:mt-6">
          Trusted By Experts.
        </h2>

        <p className="text-sm sm:text-base text-gray-500 mt-4 max-w-xl mx-auto">
          Real stories from real clients. See how our designs have transformed
          international and elevated businesses.
        </p>

        <div className="flex justify-center mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white shadow-md px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:shadow-lg transition text-sm md:text-base"
          >
            <span className="bg-red-500 text-white p-2 rounded-full">
              <ArrowRight size={16} />
            </span>
            Become a partner
          </motion.button>
        </div>

      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="group relative bg-white p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
          >

            {/* Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 to-pink-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition"></div>

            <div className="relative">

              {/* Profile */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.image}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover"
                />
              </div>

              {/* Stars */}
              <div className="text-red-500 mb-3 text-sm md:text-base">
                ★★★★★
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>

              {/* Footer */}
              <div className="mt-6">
                <h4 className="font-semibold text-sm md:text-base">
                  {item.name} • {item.role}
                </h4>

                <p className="text-xs text-gray-400">
                  {item.company}
                </p>
              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Testimonials;