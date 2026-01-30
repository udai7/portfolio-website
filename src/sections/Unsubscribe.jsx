import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Unsubscribe = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // Get email from URL if present
    const initialEmail = searchParams.get("email") || "";

    const [email, setEmail] = useState(initialEmail);
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        try {
            // Use the absolute URL since this will call the admin dashboard backend directly
            // or use the environment variable if configured for cross-origin
            const baseUrl = import.meta.env.VITE_API_BASE_URL || "https://admin-dashboard-chi-murex-51.vercel.app";

            const response = await fetch(`${baseUrl}/api/unsubscribe`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setMessage("You have been successfully unsubscribed.");
            } else {
                setStatus("error");
                setMessage(data.message || "Failed to unsubscribe. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Navbar />

            <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
                {/* Background Ambient Light */}
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="w-full max-w-md relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-neutral-900/30 backdrop-blur-xl border border-white/5 rounded-2xl p-8 shadow-2xl"
                    >
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400">Unsubscribe</h1>
                            <p className="text-neutral-400 text-sm">
                                We're sorry to see you go. successful unsubscribe means you won't receive our weekly insights anymore.
                            </p>
                        </div>

                        {status === "success" ? (
                            <div className="text-center py-6">
                                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-white mb-6">{message}</p>
                                <button
                                    onClick={() => navigate("/")}
                                    className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors"
                                >
                                    Return to Home
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2 ml-1">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all block"
                                    />
                                </div>

                                {status === "error" && (
                                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-lg flex items-center gap-2">
                                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "loading" || !email}
                                    className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group ${status === "loading" || !email
                                            ? "bg-neutral-800 text-neutral-500 cursor-not-allowed"
                                            : "bg-white text-black hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                        }`}
                                >
                                    {status === "loading" ? "Processing..." : "Confirm Unsubscribe"}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Unsubscribe;
