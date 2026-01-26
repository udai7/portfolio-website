import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  liveUrl,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const repoLabel =
    title && title.toLowerCase().includes("gram samriddhi")
      ? "See Contract"
      : "View Project";
  return (
    <>
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 sm:py-10 gap-6 sm:gap-0 group cursor-pointer"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        onClick={() => setIsHidden(true)}
      >
        <div className="space-y-2">
          <p className="text-xl sm:text-2xl font-semibold text-white group-hover:text-royal transition-colors duration-300">
            {title}
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-400 font-medium tracking-wide uppercase">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-1 rounded-md bg-white/5 border border-white/10"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsHidden(true);
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          liveUrl={liveUrl}
          repoLabel={repoLabel}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
