import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BlogEntry from "../components/BlogEntry";
import { motion, useMotionValue, useSpring } from "motion/react";

const Newsletters = () => {
    const [newsletters, setNewsletters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        const fetchNewsletters = async () => {
            try {
                const res = await fetch('/api/newsletters');
                if (res.ok) {
                    const data = await res.json();
                    // Map DB structure to BlogEntry props
                    const formatted = data.map(item => ({
                        id: item._id,
                        title: item.title,
                        description: item.content.substring(0, 150) + "...", // Truncate content for description
                        subDescription: [], // DB doesn't have this yet, maybe add later
                        href: "#", // Link to full view (future)
                        logo: "/assets/logos/react.svg", // Placeholder logo
                        image: "https://res.cloudinary.com/dnhk0mn2o/image/upload/v1769406283/oatmeal_nt49ak.png", // Placeholder
                        tags: []
                    }));
                    setNewsletters(formatted);
                } else {
                    console.error("Failed to fetch newsletters");
                }
            } catch (error) {
                console.error("Failed to fetch newsletters", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNewsletters();
    }, []);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { damping: 10, stiffness: 50 });
    const springY = useSpring(y, { damping: 10, stiffness: 50 });
    const handleMouseMove = (e) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto max-w-7xl">
                <section
                    onMouseMove={handleMouseMove}
                    className="relative c-space section-spacing pb-24"
                >
                    <h2 className="text-heading">My Newsletters</h2>
                    <p className="subtext mt-2">
                        Stay updated with my latest thoughts and insights.
                    </p>
                    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

                    {loading ? (
                        <div className="text-white text-center py-10">Loading newsletters...</div>
                    ) : newsletters.length > 0 ? (
                        newsletters.map((newsletter) => (
                            <BlogEntry key={newsletter.id} {...newsletter} setPreview={setPreview} />
                        ))
                    ) : (
                        <div className="text-neutral-400 text-center py-10">No newsletters found. Check back soon!</div>
                    )}
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

export default Newsletters;
