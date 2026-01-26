import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import DownloadCVButton from "./DownloadCVButton";

const HeroText = () => {
  const words = ["Intelligent", "Autonomous", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Udai
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Focusing on <br /> Developing
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            AI Systems
          </motion.p>
          <motion.div
            className="mt-8"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
          >
            <DownloadCVButton />
          </motion.div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col items-center space-y-2 md:hidden">
        <motion.p
          className="text-xl font-medium text-neutral-400"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Udai
        </motion.p>
        <div className="flex flex-col items-center">
          <motion.p
            className="text-4xl font-bold text-white tracking-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Developing
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="h-20 flex items-center justify-center"
          >
            <FlipWords
              words={words}
              className="font-black text-white text-5xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-bold text-white tracking-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            AI Systems
          </motion.p>
          <motion.div
            className="mt-10"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.1 }}
          >
            <DownloadCVButton />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
