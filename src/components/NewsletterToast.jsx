import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const NewsletterToast = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Show toast after 5 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/subscribe`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setMessage("subscribed!");
                setTimeout(() => setIsVisible(false), 3000);
            } else {
                setStatus("error");
                setMessage(data.message || "Failed to subscribe");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Something went wrong");
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: 50 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
                    className="fixed bottom-6 z-50 w-[calc(100%-3rem)] max-w-xs left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-6"
                >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl">
                        {/* Close button */}
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-2 right-2 p-1 text-white/40 hover:text-white transition-colors"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                                Weekly Insights
                            </h3>
                            <p className="text-xs text-neutral-400 mt-1">
                                Get the latest tech trends and updates delivered to your inbox.
                            </p>
                        </div>

                        {status === "success" ? (
                            <div className="flex items-center justify-center py-2 text-green-400 font-medium">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {message}
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                <input
                                    type="email"
                                    placeholder="name@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all font-sans"
                                />

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-900/20 hover:shadow-orange-900/40 hover:from-amber-500 hover:to-orange-500 active:scale-95 transition-all disabled:opacity-70 disabled:pointer-events-none"
                                >
                                    {status === "loading" ? "..." : "Subscribe"}
                                </button>

                                {status === "error" && (
                                    <p className="text-xs text-red-400 text-center">{message}</p>
                                )}
                            </form>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NewsletterToast;
