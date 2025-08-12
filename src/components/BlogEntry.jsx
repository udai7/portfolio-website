import React, { useState } from "react";
import BlogPost from "./BlogPost";

const BlogEntry = ({
  id,
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  // Check if this is the Information Service project blog
  const isInfoServiceBlog = id === 102 || title.includes("Information Service");

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && isInfoServiceBlog && (
        <BlogPost
          blog={{
            id,
            title,
            description,
            subDescription,
            href,
            image,
            tags,
          }}
          onClose={() => setIsHidden(false)}
        />
      )}
      {isHidden && !isInfoServiceBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
          <div className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10">
            <button
              onClick={() => setIsHidden(false)}
              className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
            >
              <img src="assets/close.svg" className="w-6 h-6" />
            </button>
            <img src={image} alt={title} className="w-full rounded-t-2xl" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
              <p className="mb-3 font-normal text-neutral-400">{description}</p>
              {subDescription.map((subDesc, index) => (
                <p key={index} className="mb-3 font-normal text-neutral-400">
                  {subDesc}
                </p>
              ))}
              <div className="flex items-center justify-center mt-6">
                <p className="text-neutral-400 text-center">
                  Detailed blog post coming soon! Stay tuned for more content.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogEntry;
