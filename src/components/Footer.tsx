import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f6f6f6] px-6 md:px-16 py-16">

      {/* Top Banner Image */}
      <div className="rounded-2xl overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Banner"
          className="w-full h-65 object-cover"
        />
      </div>

      {/* Middle Section */}
      <div className="grid lg:grid-cols-2 gap-16 mb-16">

        {/* Left */}
        <div>

          <h2 className="text-4xl font-semibold text-gray-800">
            Stay connected®
          </h2>

          <h3 className="text-2xl font-semibold mt-3 underline">
            sayhi@clivelle.com
          </h3>

          <p className="text-gray-500 mt-4 max-w-md">
            Crafted with creativity and passion. Let's stay connected
            reach out anytime!
          </p>

          <button className="flex items-center gap-3 bg-white shadow-md px-6 py-3 rounded-full mt-6 hover:shadow-lg transition">
            <span className="bg-red-500 text-white p-2 rounded-full">
              <ArrowRight size={16}/>
            </span>
            Contact Now
          </button>

        </div>


        {/* Right Navigation */}
        <div className="space-y-4">

          {[
            "Home",
            "About",
            "Work",
            "Insights",
            "Contact"
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-4 cursor-pointer hover:opacity-70 transition"
            >
              <span className="text-gray-600">
                {`0${index + 1}/`} {item}
              </span>

              <ArrowRight size={16}/>
            </div>
          ))}

        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t pt-12">

        <div className="flex justify-between items-end">

          <h1 className="text-[120px] font-bold leading-none">
            VIPER
          </h1>

          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            className="w-60 h-40 object-cover rounded-xl"
          />

        </div>

        <div className="flex justify-between mt-6 text-sm text-gray-500">
          <p>Copyright © Mandro 2025</p>
          <p className="cursor-pointer">Back to top</p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;