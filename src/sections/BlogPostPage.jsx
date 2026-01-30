import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlogPost from "../components/BlogPost";
import { myBlogs } from "../constants";

import { fetchWithCache } from "../utils/apiCache";

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isNewsletterContext = location.pathname.includes("/newsletters");

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

      // 2. Try finding in cached newsletters list first (Optimization)
      try {
        const cachedList = localStorage.getItem("newsletters_list");
        if (cachedList) {
          const parsed = JSON.parse(cachedList);
          // Check if cache is still valid (24h)
          const now = new Date().getTime();
          if ((now - parsed.timestamp) / (1000 * 60 * 60) < 24) {
            const found = parsed.data.find(n => n._id === id);
            if (found) {
              console.log("[Cache] Found in newsletters_list cache");
              setBlog({
                id: found._id,
                title: found.title,
                description: found.content,
                subDescription: found.keyTakeaways || [],
                image: found.image || "https://res.cloudinary.com/dnhk0mn2o/image/upload/v1769406283/oatmeal_nt49ak.png",
                tags: found.hashtags ? found.hashtags.map((t, i) => ({ id: i, name: t, path: "/assets/logos/react.svg" })) : [],
                href: "",
                date: found.sentAt,
                isNewsletter: true,
              });
              setLoading(false);
              return;
            }
          }
        }

        // 3. Fetch specific newsletter with cache if not found in list
        const data = await fetchWithCache(
          `${import.meta.env.VITE_API_BASE_URL}/api/newsletters/${id}`,
          `newsletter_${id}`,
          24
        );

        console.log("Fetched API Data:", data);

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
          onClick={() => navigate(isNewsletterContext ? "/newsletters" : "/blogs")}
          className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {isNewsletterContext ? "Back to Newsletters" : "Back to Blogs"}
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
        // Minimal/Premium Layout for other blogs (and Newsletters)
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
          <div className="container mx-auto px-6 py-24 max-w-3xl">

            {/* Header Section */}
            <div className="mb-16">
              <button
                onClick={() => navigate(isNewsletterContext ? "/newsletters" : "/blogs")}
                className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 mb-12 text-sm uppercase tracking-widest font-medium"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
                {isNewsletterContext ? "Back to Newsletters" : "Back to Blogs"}
              </button>

              <div className="flex flex-wrap gap-3 mb-8">
                {blog.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="text-xs font-medium px-3 py-1 border border-neutral-800 rounded-full text-neutral-400"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-4 font-generalsans">
                {blog.title}
              </h1>

              <div className="flex items-center gap-4 text-neutral-500 text-sm mt-6">
                <span>{new Date(blog.date || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                {blog.author && (
                  <>
                    <span className="w-1 h-1 bg-neutral-700 rounded-full" />
                    <span>{blog.author}</span>
                  </>
                )}
              </div>
            </div>

            {/* Featured Image */}
            <div className="w-full aspect-video mb-16 overflow-hidden bg-neutral-900 rounded-none sm:rounded-2xl ring-1 ring-white/10">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Content Section */}
            <div className="prose prose-invert max-w-none prose-lg prose-headings:font-semibold prose-p:text-neutral-300 prose-p:leading-8 prose-a:text-white prose-a:no-underline hover:prose-a:underline">
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-12 border-l-2 border-white pl-6">
                {blog.description}
              </p>

              {blog.subDescription && blog.subDescription.length > 0 && (
                <div className="my-16 pl-6 border-l border-neutral-800">
                  <h3 className="text-lg font-medium text-white mb-6 uppercase tracking-wider">
                    Key Takeaways
                  </h3>
                  <ul className="space-y-4 m-0 p-0 list-none">
                    {blog.subDescription.map((desc, idx) => (
                      <li
                        key={idx}
                        className="text-neutral-400 text-lg flex items-start gap-4"
                      >
                        <span className="text-neutral-600 mt-1.5">0{idx + 1}</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer / Actions */}
            <div className="mt-24 pt-12 border-t border-neutral-900 flex justify-between items-center">
              {/* Left side empty for spacing or future use */}
              <div></div>

              {blog.href && (
                <a
                  href={blog.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-black hover:bg-neutral-200 transition-colors font-semibold rounded-full flex items-center gap-2"
                >
                  View Project Source
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-45">
                    <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;
