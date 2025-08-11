import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const DownloadCVButton = () => {
  const [downloading, setDownloading] = useState(false);

  const downloadCV = () => {
    setDownloading(true);

    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // This will be the CV file you'll put in public folder
    link.download = "Udai_Das_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={downloadCV}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-white text-black w-[12rem] cursor-pointer overflow-hidden"
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
  );
};

export default DownloadCVButton;
