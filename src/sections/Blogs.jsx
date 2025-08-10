import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Project from "../components/Project";
import { myBlogs } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Blogs = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);

  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-7xl">
        <section
          onMouseMove={handleMouseMove}
          className="relative c-space section-spacing pb-24"
        >
          <h2 className="text-heading">My Blog Posts</h2>
          <p className="subtext mt-2">
            Stay tuned — I'll add more blogs later as I continue learning and
            building.
          </p>
          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
          {myBlogs.map((blog) => (
            <Project key={blog.id} {...blog} setPreview={setPreview} />
          ))}
          {preview && (
            <motion.img
              className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
              src={preview}
              style={{ x: springX, y: springY }}
            />
          )}
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
