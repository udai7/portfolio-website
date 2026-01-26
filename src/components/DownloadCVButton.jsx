import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const DownloadCVButton = () => {
  const [downloading, setDownloading] = useState(false);

  const downloadCV = () => {
    setDownloading(true);

    // Create a link element and trigger download (public assets are served from `/`)
    const link = document.createElement("a");
    link.href = "/assets/Ai_Ml.pdf"; // points to public/assets/Ai_Ml.pdf
    link.download = "Ai_Ml.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <motion.button
        onClick={downloadCV}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 1.05 }}
        className="relative px-6 py-4 text-sm text-center rounded-full font-medium bg-white text-black min-w-[14rem] cursor-pointer overflow-hidden shadow-xl"
      >
        <AnimatePresence mode="wait">
          {downloading ? (
            <motion.p
              className="flex items-center justify-center gap-2 "
              key="downloading"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <img
                src="assets/copy-done.svg"
                className="w-5 filter invert"
                alt="download icon"
              />
              CV Downloaded
            </motion.p>
          ) : (
            <motion.p
              className="flex items-center justify-center gap-2"
              key="download"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <img
                src="assets/arrow-up.svg"
                className="w-5 filter invert"
                alt="download icon"
              />
              Download CV
            </motion.p>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Social Icons Container */}
      <div className="flex gap-4">
        <motion.a
          href="https://www.linkedin.com/in/udai-das-9277a223b/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 1.05 }}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-lg"
        >
          <FaLinkedin className="w-6 h-6 text-black" />
        </motion.a>

        <motion.a
          href="https://github.com/udai7"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 1.05 }}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-lg"
        >
          <FaGithub className="w-6 h-6 text-black" />
        </motion.a>
      </div>
    </div>
  );
};

export default DownloadCVButton;
