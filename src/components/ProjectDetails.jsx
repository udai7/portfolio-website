import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  liveUrl,
  repoLabel = "View Project",
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden backdrop-blur-md bg-black/60">
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border shadow-2xl rounded-3xl bg-gradient-to-b from-navy to-midnight border-white/10 custom-scrollbar"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-full top-4 right-4 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
        >
          <img src="assets/close.svg" className="w-6 h-6 invert" />
        </button>
        <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
        </div>
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h5 className="text-3xl font-bold text-white mb-2">{title}</h5>
            <p className="text-lg text-neutral-300 leading-relaxed">{description}</p>
          </div>

          <div className="space-y-4">
            {subDescription.map((subDesc, index) => (
              <div key={index} className="flex gap-3">
                <div className="mt-2 size-1.5 rounded-full bg-royal shrink-0" />
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">{subDesc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-6 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-4">
              {tags.map((tag) => (
                <div key={tag.id} className="group relative">
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="size-10 rounded-xl bg-white/5 p-2 border border-white/10 hover:border-royal transition-all duration-300"
                  />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 w-full sm:w-auto">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:scale-105 active:scale-95 transition-all"
              >
                {repoLabel}
                <img src="assets/arrow-up.svg" className="size-4 filter invert" />
              </a>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all"
              >
                Live Demo
                <img src="assets/arrow-up.svg" className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
