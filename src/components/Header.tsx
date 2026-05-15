import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center"
      >
        <div
          className="
          flex items-center justify-between
          w-[94%] md:w-[92%] max-w-7xl
          px-4 md:px-6 py-3
          rounded-full
          backdrop-blur-2xl
          bg-gradient-to-r from-slate-900/70 via-red-900/60 to-slate-900/70
          border border-white/10
          shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          text-white
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-2 font-semibold text-base md:text-lg">
            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center text-white">
              ✦
            </div>

            <Link
              to="/"
              className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              Rohit Raj
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm text-gray-300">
            <Link to="/" onClick={handleHomeClick}>
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Project</Link>
            <Link to="/services">Services</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </motion.header>


      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="
            fixed top-20 left-1/2 -translate-x-1/2
            w-[90%]
            backdrop-blur-xl
            bg-black/80
            border border-white/10
            rounded-2xl
            p-6
            z-40
            lg:hidden
            "
          >
            <nav className="flex flex-col gap-6 text-center text-gray-300">

              <Link to="/" onClick={handleHomeClick}>
                Home
              </Link>

              <Link to="/about" onClick={() => setOpen(false)}>
                About
              </Link>

              <Link to="/projects" onClick={() => setOpen(false)}>
                Project
              </Link>

              <Link to="/services" onClick={() => setOpen(false)}>
                Services
              </Link>

              <Link to="/testimonials" onClick={() => setOpen(false)}>
                Testimonials
              </Link>

              <Link to="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;