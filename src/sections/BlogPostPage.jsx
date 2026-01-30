import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlogPost from "../components/BlogPost";
import { myBlogs } from "../constants";

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      // 1. Try static blogs first
      const staticBlog = myBlogs.find((b) => b.id.toString() === id);
      if (staticBlog) {
        setBlog(staticBlog);
        setLoading(false);
        return;
      }

      // 2. Try fetching from Newsletter API
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/newsletters/${id}`);
        if (res.ok) {
          const data = await res.json();
          console.log("Fetched API Data:", data); // DEBUG LOG

          // Normalize API data to match Static Blog structure
          setBlog({
            id: data._id,
            title: data.title,
            description: data.content,
            subDescription: data.keyTakeaways || [],
            image: data.image || "https://res.cloudinary.com/dnhk0mn2o/image/upload/v1769406283/oatmeal_nt49ak.png",
            tags: data.hashtags ? data.hashtags.map((t, i) => ({ id: i, name: t, path: "/assets/logos/react.svg" })) : [],
            href: "",
            date: data.sentAt,
            isNewsletter: true,
          });
        } else {
          console.error("Newsletter not found");
        }
      } catch (error) {
        console.error("Failed to fetch blog/newsletter", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

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

  // Check if this is a detailed blog post
  const isDetailedBlog =
    blog.id === 102 ||
    blog.id === 103 ||
    blog.id === 104 ||
    (blog.title && blog.title.includes("Information Service")) ||
    (blog.title && blog.title.includes("HackPub")) ||
    (blog.title && blog.title.includes("Probability"));

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
                {/* <img src={tag.path} alt={tag.name} className="w-5 h-5" /> */}
                <span className="text-sm text-amber-400">#{tag.name}</span>
              </div>
            ))}
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8 whitespace-pre-wrap">
              {blog.description}
            </p>

            {blog.subDescription && blog.subDescription.length > 0 && (
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Key Takeaways
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
            )}
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
