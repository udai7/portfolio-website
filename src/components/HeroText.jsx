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
      <div className="flex flex-col space-y-4 md:hidden">
        <motion.p
          className="text-2xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Udai
        </motion.p>
        <div>
          <motion.p
            className="text-3xl font-black text-neutral-300"
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
            className="my-2"
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-5xl"
            />
          </motion.div>
          <motion.p
            className="text-3xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            AI Models
          </motion.p>
          <motion.div
            className="mt-6 flex justify-center"
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
