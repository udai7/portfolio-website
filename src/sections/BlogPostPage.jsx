import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlogPost from "../components/BlogPost";
import { myBlogs } from "../constants";

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = myBlogs.find((b) => b.id.toString() === id);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <button
          onClick={() => navigate("/blogs")}
          className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  // Check if this is a detailed blog post (Information Service or Hackathon Platform)
  const isDetailedBlog =
    blog.id === 102 ||
    blog.id === 103 ||
    blog.title.includes("Information Service") ||
    blog.title.includes("HackPub");

  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />

      {isDetailedBlog ? (
        // Render detailed blog view using the shared component in page mode
        <BlogPost blog={blog} isPage={true} />
      ) : (
        // Simple/Default Layout for other blogs
        <div className="container mx-auto px-6 py-24 max-w-4xl text-white">
          <div className="relative w-full h-[400px] mb-8 overflow-hidden rounded-2xl border border-white/10">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold mb-6 text-white leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-8">
            {blog.tags.map((tag) => (
              <div
                key={tag.id}
                className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
              >
                <img src={tag.path} alt={tag.name} className="w-5 h-5" />
                <span className="text-sm text-gray-300">{tag.name}</span>
              </div>
            ))}
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {blog.description}
            </p>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Key Highlights
              </h3>
              <ul className="space-y-4">
                {blog.subDescription.map((desc, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
            <button
              onClick={() => navigate("/blogs")}
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white font-medium flex items-center gap-2"
            >
              ← Back to Blogs
            </button>

            {blog.href && (
              <a
                href={blog.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-medium flex items-center gap-2"
              >
                View Project Source →
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;
