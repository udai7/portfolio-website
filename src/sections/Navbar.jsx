import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onClick }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="/#projects" onClick={onClick}>
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="/#experience" onClick={onClick}>
          Experience
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="/#contact" onClick={onClick}>
          Contact
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold hover:from-white hover:to-white transition-all"
          href="/blogs"
          onClick={onClick}
        >
          Blogs
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-bold hover:from-white hover:to-white transition-all"
          href="/newsletters"
          onClick={onClick}
        >
          Newsletters
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 inset-x-0 z-50 w-full backdrop-blur-md bg-primary/70 border-b border-white/10">
      <div className="mx-auto w-full px-6 md:px-12">
        <div className="flex items-center justify-between py-4">
          <a
            href="/"
            className="text-2xl font-bold transition-colors text-neutral-200 hover:text-white"
          >
            Udai
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            {isOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
          <nav className="hidden sm:flex">
            <Navigation onClick={handleNavClick} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation onClick={handleNavClick} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
