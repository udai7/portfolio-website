import { motion } from "motion/react";
import { useState } from "react";

const BlogPost = ({ blog, onClose, isPage = false }) => {
  const [activeSection, setActiveSection] = useState("overview");

  // Determine which project this is
  const isHackathonPlatform = blog.id === 103 || blog.title.includes("HackPub");
  const isGovernmentServices =
    blog.id === 102 || blog.title.includes("Government Services");
  const isProbabilityBlog =
    blog.id === 104 || blog.title.includes("Probability");

  const defaultSections = {
    overview: "Overview",
    features: "Features",
    tech: "Technology Stack",
    api: "API Endpoints",
    setup: "Setup Guide",
    deployment: "Deployment",
  };

  const probabilitySections = {
    basics: "1. Basics & PMF/PDF/CDF",
    bernoulli: "2. Bernoulli Dist",
    binomial: "3. Binomial Dist",
    poisson: "4. Poisson Dist",
    normal: "5. Normal/Gaussian",
    std_normal: "6. Standard Normal",
    uniform: "7. Uniform Dist",
    log_normal: "8. Log-Normal",
    power_law: "9. Power Law",
    pareto: "10. Pareto & Central",
  };

  if (isProbabilityBlog && activeSection === "overview") {
    setActiveSection("basics");
  }

  const sections = isProbabilityBlog ? probabilitySections : defaultSections;

  const renderProbabilityContent = () => {
    switch (activeSection) {
      case "basics":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Probability Distribution Functions
            </h3>
            <p className="text-lg text-neutral-200 leading-relaxed">
              A function that describes the likelihood of obtaining the possible
              values that a random variable can assume.
            </p>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-4">
              <h4 className="text-xl font-semibold text-white mb-2">
                1. Probability Mass Function (PMF)
              </h4>
              <p className="text-lg text-neutral-300 mb-4 leading-relaxed">
                Used for <strong>Discrete Random Variables</strong>. It gives
                the probability that a discrete random variable is exactly equal
                to some value.
              </p>
              <div className="bg-black/30 p-4 rounded text-sm font-mono text-green-400">
                P(X = x) = f(x)
              </div>
              <p className="text-neutral-400 text-sm mt-3">
                Example: Rolling a die. P(X=1) = 1/6.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-4">
              <h4 className="text-xl font-semibold text-white mb-2">
                2. Probability Density Function (PDF)
              </h4>
              <p className="text-lg text-neutral-300 mb-4 leading-relaxed">
                Used for <strong>Continuous Random Variables</strong>. The
                probability of the variable falling within a particular range of
                values is given by the area under the density function but
                probability at an exact point is 0.
              </p>
              <div className="bg-black/30 p-4 rounded text-sm font-mono text-green-400">
                P(a ≤ X ≤ b) = ∫ from a to b f(x)dx
              </div>
              <p className="text-neutral-400 text-sm mt-3">
                Example: Height of students in a class.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-4">
              <h4 className="text-xl font-semibold text-white mb-2">
                3. Cumulative Distribution Function (CDF)
              </h4>
              <p className="text-lg text-neutral-300 mb-4 leading-relaxed">
                Gives the probability that a random variable X will take a value
                less than or equal to x.
              </p>
              <div className="bg-black/30 p-4 rounded text-sm font-mono text-green-400">
                F(x) = P(X ≤ x)
              </div>
              <p className="text-neutral-400 text-sm mt-3">
                Applicable to both discrete and continuous variables.
              </p>
            </div>
          </div>
        );
      case "bernoulli":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bernoulli Distribution
            </h3>
            <span className="bg-indigo-600/30 text-indigo-300 px-3 py-1 rounded-full text-sm">
              Discrete
            </span>
            <p className="text-lg text-neutral-200 mt-4 leading-relaxed">
              The Bernoulli Distribution is the foundation of all discrete
              distributions. It represents a single trial of an experiment that
              has exactly two possible outcomes: <strong>Success</strong>{" "}
              (denoted as 1) and <strong>Failure</strong> (denoted as 0). It is
              the simplest possible random variable, often used as a building
              block for more complex distributions like the Binomial
              Distribution.
            </p>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-6">
              <h4 className="text-white font-semibold mb-4 text-center">
                Probability Mass Function (PMF) Visualization
              </h4>
              <div className="relative h-64 w-full flex items-end justify-center px-10 border-b border-l border-white/20">
                {/* Y-Axis Labels */}
                <div className="absolute -left-8 top-0 h-full flex flex-col justify-between text-[10px] text-neutral-500 py-1">
                  <span>1.0</span>
                  <span>0.8</span>
                  <span>0.6</span>
                  <span>0.4</span>
                  <span>0.2</span>
                  <span>0</span>
                </div>

                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between opacity-10 py-1 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="border-t border-white w-full" />
                  ))}
                </div>

                {/* The Graph */}
                <div className="relative w-full h-full flex justify-around items-end pb-0">
                  {/* k = 0 */}
                  <div className="relative flex items-end gap-2 px-4 h-full">
                    <div
                      className="w-1 bg-blue-500 rounded-t"
                      style={{ height: "80%" }}
                    ></div>
                    <div
                      className="w-1 bg-green-500 rounded-t"
                      style={{ height: "50%" }}
                    ></div>
                    <div
                      className="w-1 bg-red-500 rounded-t"
                      style={{ height: "20%" }}
                    ></div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white font-mono">
                      0
                    </span>
                  </div>

                  {/* k = 1 */}
                  <div className="relative flex items-end gap-2 px-4 h-full">
                    <div
                      className="w-1 bg-blue-500 rounded-t"
                      style={{ height: "20%" }}
                    ></div>
                    <div
                      className="w-1 bg-green-500 rounded-t"
                      style={{ height: "50%" }}
                    ></div>
                    <div
                      className="w-1 bg-red-500 rounded-t"
                      style={{ height: "80%" }}
                    ></div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white font-mono">
                      1
                    </span>
                  </div>
                </div>

                {/* Legend */}
                <div className="absolute top-0 right-0 flex flex-col gap-1 bg-black/40 p-2 rounded border border-white/5 text-[10px]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500"></div>
                    <span className="text-neutral-300">p = 0.2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500"></div>
                    <span className="text-neutral-300">p = 0.5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500"></div>
                    <span className="text-neutral-300">p = 0.8</span>
                  </div>
                </div>

                {/* X-Axis Label */}
                <span className="absolute -right-6 -bottom-2 text-[10px] text-neutral-500">
                  k
                </span>
                <span className="absolute -left-12 -top-6 text-[10px] text-neutral-500 rotate-[-90deg] origin-bottom-right">
                  Wahrscheinlichkeit (P)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="font-semibold text-white text-lg">
                  Key Statistics
                </h4>
                <ul className="text-neutral-300 space-y-2 mt-2">
                  <li>
                    <strong>p:</strong> Probability of Success
                  </li>
                  <li>
                    <strong>Mean (E[X]):</strong> p
                  </li>
                  <li>
                    <strong>Variance:</strong> p(1-p)
                  </li>
                  <li>
                    <strong>Median:</strong> 0 if p &lt; 0.5, else 1
                  </li>
                  <li>
                    <strong>Mode:</strong> 0 if p &lt; 0.5, else 1
                  </li>
                  <li>
                    <strong>Std Dev:</strong> √p(1-p)
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="font-semibold text-white text-lg">
                  Real Life Examples
                </h4>
                <div className="space-y-4 mt-3">
                  <div>
                    <p className="font-medium text-indigo-300 text-sm">
                      1. Email Spam Detection
                    </p>
                    <p className="text-neutral-300 text-sm mt-1">
                      An incoming email is either <strong>Spam</strong> or{" "}
                      <strong>Not Spam</strong>. This is a perfect Bernoulli
                      example because each email is analyzed as an independent
                      event with strictly two possible outcomes.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-indigo-300 text-sm">
                      2. Quality Inspection
                    </p>
                    <p className="text-neutral-300 text-sm mt-1">
                      A tester checks a single chip on a circuit board to see if
                      it is <strong>Defective</strong> or{" "}
                      <strong>Functional</strong>. This illustrates a Bernoulli
                      trial perfectly as it focuses on a single instance of a
                      binary result.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "binomial":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Binomial Distribution
            </h3>
            <span className="bg-indigo-600/30 text-indigo-300 px-3 py-1 rounded-full text-sm">
              Discrete
            </span>
            <p className="text-lg text-neutral-200 mt-4 leading-relaxed">
              The Binomial Distribution models the number of successes in a
              sequence of <strong>n independent trials</strong>, each with its
              own binary outcome (Success/Failure) and a constant probability of
              success <strong>p</strong>. It essentially answers the question:
              "If I repeat a Bernoulli trial n times, how many successes will I
              see?"
            </p>

            <div className="bg-black/30 p-4 rounded text-sm font-mono text-green-400">
              P(X=k) = nCk * p^k * (1-p)^(n-k)
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-6">
              <h4 className="text-white font-semibold mb-6 text-center">
                Probability Mass Function (PMF) Comparison
              </h4>
              <div className="flex flex-col items-center">
                {/* Legend Overlay - HTML based for better sizing control */}
                <div className="flex flex-wrap justify-center gap-6 mb-6 text-xs md:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-neutral-300">p=0.5, n=20</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500"></div>
                    <span className="text-neutral-300">p=0.7, n=20</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-red-500"></div>
                    <span className="text-neutral-300">p=0.5, n=40</span>
                  </div>
                </div>

                <div className="relative h-64 w-full px-12 pb-8">
                  {/* Y-Axis Labels */}
                  <div className="absolute left-0 top-0 h-[calc(100%-2rem)] flex flex-col justify-between text-[10px] text-neutral-500 py-1 items-end pr-2 w-10">
                    <span>0.25</span>
                    <span>0.20</span>
                    <span>0.15</span>
                    <span>0.10</span>
                    <span>0.05</span>
                    <span>0.00</span>
                  </div>

                  {/* Graph Area */}
                  <div className="relative w-full h-full border-b border-l border-white/20">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      {/* Grid Lines */}
                      {[0, 20, 40, 60, 80, 100].map((v) => (
                        <line
                          key={v}
                          x1="0"
                          y1={v}
                          x2="100"
                          y2={v}
                          stroke="white"
                          strokeWidth="0.1"
                          strokeOpacity="0.1"
                        />
                      ))}

                      {/* Data Points - Logic uses scaled coordinates to prevent stretching */}
                      {/* Note: SVG circles/rects in 'preserveAspectRatio="none"' will stretch. 
                          We use small absolute sizes or paths if we wanted perfect circles,
                          but here we'll use rects for better control. */}

                      {/* p=0.5, n=20 (Blue) */}
                      <path
                        d="M 12.5 99.6 Q 25 0, 37.5 99.6"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-90"
                      />

                      {/* p=0.7, n=20 (Green) */}
                      <path
                        d="M 22.5 96 Q 35 15, 47.5 96"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-90"
                      />

                      {/* p=0.5, n=40 (Red) */}
                      <path
                        d="M 32.5 98 Q 51 40, 70 96"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-90"
                      />
                    </svg>

                    {/* X-Axis Labels */}
                    <div className="absolute left-0 -bottom-6 w-full flex justify-between text-[10px] text-neutral-500">
                      <span>0</span>
                      <span>10</span>
                      <span>20</span>
                      <span>30</span>
                      <span>40</span>
                    </div>

                    {/* Axis Labels */}
                    <span className="absolute -right-4 -bottom-2 text-[10px] text-neutral-500">
                      k
                    </span>
                    <span className="absolute -left-12 -top-6 text-[10px] text-neutral-500 rotate-[-90deg] origin-bottom-right whitespace-nowrap">
                      Probability (P)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="font-semibold text-white text-lg">
                  Key Statistics
                </h4>
                <ul className="text-neutral-300 space-y-2 mt-2">
                  <li>
                    <strong>n:</strong> Number of Trials
                  </li>
                  <li>
                    <strong>p:</strong> Probability of Success
                  </li>
                  <li>
                    <strong>Mean:</strong> np
                  </li>
                  <li>
                    <strong>Variance:</strong> np(1-p)
                  </li>
                  <li>
                    <strong>Std Dev:</strong> √np(1-p)
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="font-semibold text-white text-lg">
                  Real Life Examples
                </h4>
                <div className="space-y-4 mt-3">
                  <div>
                    <p className="font-medium text-emerald-300 text-sm">
                      1. Manufacturing & Quality Control
                    </p>
                    <p className="text-neutral-300 text-sm mt-1">
                      A factory produces 500 phone screens a day. If 2% are
                      known to be defective (p=0.02), we use Binomial
                      Distribution to predict the probability of finding exactly
                      5 defective screens in a random batch.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-emerald-300 text-sm">
                      2. Clinical Trials
                    </p>
                    <p className="text-neutral-300 text-sm mt-1">
                      Testing a new drug on 100 people. If the historical
                      success rate is 70% (p=0.70), the distribution helps
                      calculate the likelihood that at least 80 people will show
                      improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "poisson":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Poisson Distribution
            </h3>
            <span className="bg-indigo-600/30 text-indigo-300 px-3 py-1 rounded-full text-sm">
              Discrete
            </span>
            <p className="text-lg text-neutral-200 mt-4 leading-relaxed">
              The Poisson Distribution expresses the probability of a given
              number of events occurring in a <strong>fixed interval</strong> of
              time or space. It is used for events that happen independently and
              at a constant average rate. Unlike the Binomial distribution, it
              doesn't have a fixed number of trials (n)—it focuses on frequency
              within a continuous window.
            </p>

            <div className="bg-black/30 p-4 rounded text-sm font-mono text-green-400">
              P(X=k) = (λ^k * e^-λ) / k!
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-6">
              <h4 className="text-white font-semibold mb-6 text-center">
                Probability Mass Function (PMF) by λ (Lambda)
              </h4>
              <div className="flex flex-col items-center">
                {/* Legend Overlay */}
                <div className="flex flex-wrap justify-center gap-6 mb-6 text-xs md:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-cyan-400"></div>
                    <span className="text-neutral-300">λ = 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-emerald-400"></div>
                    <span className="text-neutral-300">λ = 4</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-amber-400"></div>
                    <span className="text-neutral-300">λ = 10</span>
                  </div>
                </div>

                <div className="relative h-64 w-full px-12 pb-8">
                  {/* Y-Axis Labels */}
                  <div className="absolute left-0 top-0 h-[calc(100%-2rem)] flex flex-col justify-between text-[10px] text-neutral-500 py-1 items-end pr-2 w-10">
                    <span>0.40</span>
                    <span>0.30</span>
                    <span>0.20</span>
                    <span>0.10</span>
                    <span>0.00</span>
                  </div>

                  {/* Graph Area */}
                  <div className="relative w-full h-full border-b border-l border-white/20">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      {/* Grid Lines */}
                      {[0, 25, 50, 75, 100].map((v) => (
                        <line
                          key={v}
                          x1="0"
                          y1={v}
                          x2="100"
                          y2={v}
                          stroke="white"
                          strokeWidth="0.1"
                          strokeOpacity="0.1"
                        />
                      ))}

                      {/* λ = 1 (Cyan) */}
                      <path
                        d="M 0 100 Q 2 0, 25 100"
                        fill="none"
                        stroke="#22d3ee"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-90"
                      />

                      {/* λ = 4 (Emerald) */}
                      <path
                        d="M 0 95 C 10 90, 15 40, 25 55 S 40 90, 50 100"
                        fill="none"
                        stroke="#34d399"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-90"
                      />

                      {/* λ = 10 (Amber) */}
                      <path
                        d="M 0 100 C 30 100, 45 60, 55 70 S 80 95, 100 100"
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-90"
                      />
                    </svg>

                    {/* X-Axis Labels */}
                    <div className="absolute left-0 -bottom-6 w-full flex justify-between text-[10px] text-neutral-500">
                      <span>0</span>
                      <span>5</span>
                      <span>10</span>
                      <span>15</span>
                      <span>20</span>
                    </div>

                    {/* Axis Labels */}
                    <span className="absolute -right-4 -bottom-2 text-[10px] text-neutral-500">
                      k
                    </span>
                    <span className="absolute -left-12 -top-6 text-[10px] text-neutral-500 rotate-[-90deg] origin-bottom-right whitespace-nowrap">
                      Probability (P)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="font-semibold text-white text-lg">
                  Key Statistics
                </h4>
                <ul className="text-neutral-300 space-y-2 mt-2">
                  <li>
                    <strong>λ (Lambda):</strong> The average rate parameter
                  </li>
                  <li>
                    <strong>Mean:</strong> λ
                  </li>
                  <li>
                    <strong>Variance:</strong> λ
                  </li>
                  <li>
                    <strong>Std Dev:</strong> √λ
                  </li>
                  <li>
                    <strong>Range:</strong> [0, ∞) (Discrete)
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="font-semibold text-white text-lg">
                  Real Life Examples
                </h4>
                <div className="space-y-4 mt-3">
                  <div>
                    <p className="font-medium text-amber-300 text-sm">
                      1. Network Traffic Management
                    </p>
                    <p className="text-neutral-300 text-sm mt-1">
                      Estimating the number of packet requests hitting a router
                      per millisecond. If the average is 10, the distribution
                      helps predict the risk of "packet bursts" that could lead
                      to crashes.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-amber-300 text-sm">
                      2. Rare Disease Modeling
                    </p>
                    <p className="text-neutral-300 text-sm mt-1">
                      Epidemiologists use Poisson to calculate the probability
                      of a specific number of rare health cases occurring in a
                      large population over a year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "normal":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Normal (Gaussian) Distribution
            </h3>
            <span className="bg-pink-600/30 text-pink-300 px-3 py-1 rounded-full text-sm">
              Continuous
            </span>
            <p className="text-lg text-neutral-200 mt-4 leading-relaxed">
              The Normal Distribution, also known as the Gaussian Distribution
              or "Bell Curve," is the most important probability distribution in
              statistics. It describes a symmetric, continuous probability
              distribution where most observations cluster around the central
              peak (the mean), and probabilities for values further from the
              mean taper off equally in both directions. It is the bedrock of
              the <strong>Central Limit Theorem</strong>, explaining why many
              natural and social phenomena follow this specific shape.
            </p>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-6">
              <h4 className="text-white font-semibold mb-6 text-center">
                Probability Density Function (PDF) Comparison
              </h4>
              <div className="flex flex-col items-center">
                {/* Legend Overlay */}
                <div className="flex flex-wrap justify-center gap-4 mb-6 text-[10px] md:text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-[#1e40af]"></div>
                    <span className="text-neutral-300">μ=0, σ²=0.2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-[#ef4444]"></div>
                    <span className="text-neutral-300">μ=0, σ²=1.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-[#f59e0b]"></div>
                    <span className="text-neutral-300">μ=0, σ²=5.0</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-[#22c55e]"></div>
                    <span className="text-neutral-300">μ=-2, σ²=0.5</span>
                  </div>
                </div>

                <div className="relative h-64 w-full px-12 pb-8">
                  {/* Y-Axis Labels */}
                  <div className="absolute left-0 top-0 h-[calc(100%-2rem)] flex flex-col justify-between text-[10px] text-neutral-500 py-1 items-end pr-2 w-10">
                    <span>1.0</span>
                    <span>0.8</span>
                    <span>0.6</span>
                    <span>0.4</span>
                    <span>0.2</span>
                    <span>0.0</span>
                  </div>

                  <div className="relative w-full h-full border-b border-l border-white/20">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      {/* Grid Lines */}
                      {[0, 25, 50, 75, 100].map((v) => (
                        <line
                          key={v}
                          x1="0"
                          y1={v}
                          x2="100"
                          y2={v}
                          stroke="white"
                          strokeWidth="0.1"
                          strokeOpacity="0.1"
                        />
                      ))}
                      {[20, 40, 60, 80].map((v) => (
                        <line
                          key={v}
                          x1={v}
                          y1="0"
                          x2={v}
                          y2="100"
                          stroke="white"
                          strokeWidth="0.1"
                          strokeOpacity="0.1"
                        />
                      ))}

                      {/* Normal Distribution Paths (simplified paths for visualization) */}
                      {/* μ=0, σ2=0.2 (Blue - Sharp peak) */}
                      <path
                        d="M 0 100 Q 50 -100 100 100"
                        fill="none"
                        stroke="#1e40af"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-80"
                      />

                      {/* μ=0, σ2=1.0 (Red - Standard) */}
                      <path
                        d="M 0 100 Q 50 20 100 100"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-80"
                      />

                      {/* μ=0, σ2=5.0 (Orange - Flat) */}
                      <path
                        d="M 0 100 C 20 95, 80 95, 100 100"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-80"
                      />

                      {/* μ=-2, σ2=0.5 (Green - Shifted) */}
                      <path
                        d="M 0 100 Q 30 10 60 100"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                        className="opacity-80"
                      />
                    </svg>

                    {/* X-Axis Labels */}
                    <div className="absolute left-0 -bottom-6 w-full flex justify-between text-[10px] text-neutral-500 px-0">
                      <span>-5</span>
                      <span>-4</span>
                      <span>-3</span>
                      <span>-2</span>
                      <span>-1</span>
                      <span>0</span>
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="font-semibold text-white text-lg">
                  Key Statistics
                </h4>
                <ul className="text-neutral-300 space-y-3 mt-3">
                  <li>
                    <strong>μ (Mean):</strong> The center or peak of the
                    distribution.
                  </li>
                  <li>
                    <strong>σ² (Variance):</strong> How spread out the data is.
                  </li>
                  <li>
                    <strong>σ (Std Dev):</strong> The average distance from the
                    mean. Controls the width of the bell.
                  </li>
                  <li>
                    <strong>Symmetry:</strong> Mean = Median = Mode.
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="font-semibold text-white text-lg">
                  Real Life Examples
                </h4>
                <div className="space-y-4 mt-3 text-sm">
                  <div>
                    <p className="font-medium text-pink-300">
                      1. Biological Traits
                    </p>
                    <p className="text-neutral-300 mt-1 leading-relaxed">
                      Human height, weight, and blood pressure follow a normal
                      distribution, where most people are average and extremes
                      (very tall or very short) are increasingly rare.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-pink-300">
                      2. Standardized Testing
                    </p>
                    <p className="text-neutral-300 mt-1 leading-relaxed">
                      IQ scores and Exam scores (like SATs) are designed to fit
                      a normal distribution curve to allow for comparative
                      ranking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-6">
              <h4 className="text-white font-semibold mb-4 text-center text-lg">
                The Empirical Rule (68-95-99.7)
              </h4>
              <div className="relative h-48 w-full px-12 mb-4">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {/* Shaded Regions */}
                  <path
                    d="M 20 100 Q 50 0 80 100 Z"
                    fill="rgba(236, 72, 153, 0.1)"
                  />
                  <path
                    d="M 35 100 Q 50 0 65 100 Z"
                    fill="rgba(236, 72, 153, 0.2)"
                  />

                  {/* Curve */}
                  <path
                    d="M 0 100 Q 50 0 100 100"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                  />

                  {/* Std Dev Lines */}
                  <line
                    x1="50"
                    y1="0"
                    x2="50"
                    y2="100"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                  />
                  <line
                    x1="65"
                    y1="30"
                    x2="65"
                    y2="100"
                    stroke="white"
                    strokeWidth="0.3"
                    strokeDasharray="1,1"
                  />
                  <line
                    x1="35"
                    y1="30"
                    x2="35"
                    y2="100"
                    stroke="white"
                    strokeWidth="0.3"
                    strokeDasharray="1,1"
                  />
                  <line
                    x1="80"
                    y1="80"
                    x2="80"
                    y2="100"
                    stroke="white"
                    strokeWidth="0.3"
                    strokeDasharray="1,1"
                  />
                  <line
                    x1="20"
                    y1="80"
                    x2="20"
                    y2="100"
                    stroke="white"
                    strokeWidth="0.3"
                    strokeDasharray="1,1"
                  />
                </svg>
                {/* Labels */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-pink-300 font-bold bg-black/50 px-1">
                      68%
                    </span>
                    <div className="w-12 border-b border-pink-400/50 mt-1"></div>
                  </div>
                </div>
              </div>
              <ul className="text-neutral-300 text-sm space-y-2 leading-relaxed">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                  <span>
                    <strong>68%</strong> of data falls within{" "}
                    <strong>1σ</strong> (one standard deviation) of the mean.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span>
                    <strong>95%</strong> of data falls within{" "}
                    <strong>2σ</strong> (two standard deviations) of the mean.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-pink-600"></div>
                  <span>
                    <strong>99.7%</strong> of data falls within{" "}
                    <strong>3σ</strong> (three standard deviations) of the mean.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        );
      case "std_normal":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Standard Normal Distribution (Z-Distribution)
            </h3>
            <div className="flex items-center gap-3">
              <span className="bg-pink-600/30 text-pink-300 px-3 py-1 rounded-full text-sm">
                Continuous
              </span>
              <span className="text-neutral-500 text-sm">μ = 0, σ = 1</span>
            </div>

            <p className="text-lg text-neutral-200 mt-4 leading-relaxed">
              The Standard Normal Distribution is a special case of the Normal
              Distribution where the <strong>mean is 0</strong> and the{" "}
              <strong>standard deviation is 1</strong>. It serves as a universal
              benchmark, allowing statisticians to compare scores from entirely
              different datasets on a single, unified scale.
            </p>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-6">
              <h4 className="text-white font-semibold mb-8 text-center text-xl">
                The Concept of Standardization
              </h4>

              <div className="flex flex-col md:flex-row items-center justify-around gap-12">
                {/* Raw Distribution (Left) */}
                <div className="flex-1 w-full max-w-xs text-center">
                  <div className="relative h-44 w-full">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      {/* Area Shading */}
                      <path
                        d="M 25 90 C 30 70, 35 45, 45 45 L 45 90 Z"
                        fill="rgba(59, 130, 246, 0.2)"
                      />
                      {/* Curve */}
                      <path
                        d="M 5 90 C 20 90, 35 40, 50 40 S 80 90, 95 90"
                        fill="none"
                        stroke="#64748b"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                      />
                      {/* X-marks Labels */}
                      <line
                        x1="25"
                        y1="90"
                        x2="25"
                        y2="95"
                        stroke="#3b82f6"
                        strokeWidth="1"
                      />
                      <line
                        x1="45"
                        y1="90"
                        x2="45"
                        y2="95"
                        stroke="#3b82f6"
                        strokeWidth="1"
                      />
                      {/* Mean line */}
                      <line
                        x1="50"
                        y1="40"
                        x2="50"
                        y2="90"
                        stroke="white"
                        strokeWidth="0.5"
                        strokeDasharray="3,3"
                      />
                      <line
                        x1="0"
                        y1="90"
                        x2="100"
                        y2="90"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </svg>
                    {/* Bottom Labels */}
                    <div className="absolute -bottom-6 flex w-full justify-between px-2 text-[10px]">
                      <span className="text-blue-400">x₁</span>
                      <span className="text-blue-400 ml-6">x₂</span>
                      <span className="text-white">μ</span>
                      <span className="text-transparent">0</span>
                    </div>
                  </div>
                  <p className="mt-8 text-neutral-400 text-sm font-semibold tracking-wide">
                    Standard Distribution
                  </p>
                </div>

                {/* Center Bridge (Formula) */}
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-pink-600/20 p-5 rounded-2xl border border-pink-500/30 text-center shadow-lg shadow-pink-900/10">
                    <h5 className="text-pink-400 text-[10px] uppercase font-bold tracking-[0.2em] mb-2">
                      Z-Score Formula
                    </h5>
                    <p className="text-white font-bold text-2xl tracking-tighter italic">
                      z = (x - μ) / σ
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-[1px] w-8 bg-neutral-700"></div>
                    <div className="w-2 h-2 rotate-45 border-t border-r border-neutral-600"></div>
                  </div>
                </div>

                {/* Z-Distribution (Right) */}
                <div className="flex-1 w-full max-w-xs text-center">
                  <div className="relative h-44 w-full">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      {/* Area Shading */}
                      <path
                        d="M 25 90 C 30 60, 40 10, 50 10 L 50 90 L 25 90 Z"
                        fill="rgba(236, 72, 153, 0.2)"
                      />
                      {/* Curve */}
                      <path
                        d="M 5 90 C 25 90, 40 10, 50 10 S 75 90, 95 90"
                        fill="none"
                        stroke="#ec4899"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                      />
                      {/* Z-marks Labels */}
                      <line
                        x1="25"
                        y1="90"
                        x2="25"
                        y2="95"
                        stroke="#ec4899"
                        strokeWidth="1"
                      />
                      <line
                        x1="40"
                        y1="90"
                        x2="40"
                        y2="95"
                        stroke="#ec4899"
                        strokeWidth="1"
                      />
                      {/* Mean line (0) */}
                      <line
                        x1="50"
                        y1="10"
                        x2="50"
                        y2="90"
                        stroke="white"
                        strokeWidth="0.5"
                        strokeDasharray="3,3"
                      />
                      <line
                        x1="0"
                        y1="90"
                        x2="100"
                        y2="90"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </svg>
                    {/* Bottom Labels */}
                    <div className="absolute -bottom-6 flex w-full justify-between px-2 text-[10px]">
                      <span className="text-pink-400">z₁</span>
                      <span className="text-pink-400 ml-10">z₂</span>
                      <span className="text-white">0</span>
                      <span className="text-transparent">0</span>
                    </div>
                  </div>
                  <p className="mt-8 text-neutral-400 text-sm font-semibold tracking-wide">
                    Standard Normal (Z)
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-black/20 p-4 rounded-lg text-sm text-neutral-300 leading-relaxed border-l-2 border-pink-500">
                <p>
                  Standardization shifts the distribution so the{" "}
                  <strong>Mean (μ) becomes 0</strong> and rescales it so the{" "}
                  <strong>Standard Deviation (σ) becomes 1</strong>. This
                  transforms any value (x) into a (z)-score, representing how
                  many standard deviations it is from the mean.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="font-semibold text-white text-lg">
                  Key Statistics
                </h4>
                <ul className="text-neutral-300 space-y-3 mt-3 text-sm">
                  <li>
                    <strong>μ (Mean):</strong> Always <strong>0</strong> in a
                    standard normal distribution.
                  </li>
                  <li>
                    <strong>σ² (Variance):</strong> Always <strong>1</strong>{" "}
                    (no variance change).
                  </li>
                  <li>
                    <strong>σ (Std Dev):</strong> Always <strong>1</strong> (the
                    width of the Bell Curve).
                  </li>
                  <li>
                    <strong>Area:</strong> The total area under the curve is
                    always equal to <strong>1.0</strong>.
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="font-semibold text-white text-lg">
                  Real Life Example
                </h4>
                <div className="mt-3 text-sm">
                  <p className="font-medium text-pink-300 italic">
                    Comparing different metrics
                  </p>
                  <p className="text-neutral-300 mt-2 leading-relaxed">
                    Imagine comparing a fish's <strong>weight (kg)</strong> to
                    its <strong>length (cm)</strong>. Since they use different
                    units, you can't compare them directly. By converting both
                    to Z-scores, you can tell which fish is more "extreme" in
                    weight vs. length relative to its population.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "uniform":
        return (
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
              Uniform Distribution
            </h3>

            {/* Continuous Section */}
            <div className="space-y-6">
              <div className="mb-4">
                <span className="bg-blue-600/30 text-blue-300 px-3 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase">
                  Continuous Uniform
                </span>
              </div>
              <p className="text-lg text-neutral-200 leading-relaxed mt-4">
                The Continuous Uniform Distribution describes an experiment
                where there is an <strong>arbitrary outcome</strong> within a
                specific range $[a, b]$, and every single value in that range
                has an equal probability density.
              </p>

              {/* Continuous Graph */}
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-6">
                <h4 className="text-white font-semibold mb-6 text-center text-sm">
                  Probability Density Function (PDF)
                </h4>
                <div className="relative h-48 w-full max-w-md mx-auto px-12">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    {/* Rectangle Shading */}
                    <rect
                      x="30"
                      y="30"
                      width="40"
                      height="60"
                      fill="rgba(59, 130, 246, 0.2)"
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                    {/* Axis */}
                    <line
                      x1="0"
                      y1="90"
                      x2="100"
                      y2="90"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="10"
                      y1="10"
                      x2="10"
                      y2="90"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    {/* Horizontal Dashed Line for 1/(b-a) */}
                    <line
                      x1="10"
                      y1="30"
                      x2="30"
                      y2="30"
                      stroke="white"
                      strokeWidth="0.5"
                      strokeDasharray="2,2"
                    />
                    {/* Labels */}
                    <text
                      x="30"
                      y="98"
                      fill="white"
                      fontSize="6"
                      textAnchor="middle"
                    >
                      a
                    </text>
                    <text
                      x="70"
                      y="98"
                      fill="white"
                      fontSize="6"
                      textAnchor="middle"
                    >
                      b
                    </text>
                    <text
                      x="5"
                      y="32"
                      fill="white"
                      fontSize="5"
                      textAnchor="end"
                    >
                      1/(b-a)
                    </text>
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <h4 className="font-semibold text-white text-lg">
                    Key Statistics
                  </h4>
                  <ul className="text-neutral-300 space-y-2 mt-4 text-sm">
                    <li>
                      <strong>Mean:</strong> (a + b) / 2
                    </li>
                    <li>
                      <strong>Median:</strong> (a + b) / 2
                    </li>
                    <li>
                      <strong>Variance:</strong> (b - a)² / 12
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <h4 className="font-semibold text-white text-lg">
                    Real Life Example
                  </h4>
                  <div className="mt-3 text-sm">
                    <p className="font-medium text-blue-300">
                      1. Waiting for a Bus
                    </p>
                    <p className="text-neutral-300 mt-1 leading-relaxed">
                      If a bus arrives exactly every 20 minutes, and you arrive
                      randomly, your wait time is uniformly distributed between
                      0 and 20 minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Discrete Section */}
            <div className="space-y-6 pt-10 border-t border-white/10">
              <div className="mb-4">
                <span className="bg-green-600/30 text-green-300 px-3 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase">
                  Discrete Uniform
                </span>
              </div>
              <p className="text-lg text-neutral-200 leading-relaxed mt-4">
                The Discrete Uniform Distribution occurs when there are a{" "}
                <strong>finite number of outcomes</strong>, all of which are
                equally likely to occur (e.g., rolling a fair die).
              </p>

              {/* Discrete Graph */}
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-6">
                <h4 className="text-white font-semibold mb-6 text-center text-sm">
                  Probability Mass Function (PMF)
                </h4>
                <div className="relative h-48 w-full max-w-md mx-auto px-12">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    {/* Stems */}
                    {[20, 35, 50, 65, 80].map((x) => (
                      <g key={x}>
                        <line
                          x1={x}
                          y1="90"
                          x2={x}
                          y2="40"
                          stroke="#22c55e"
                          strokeWidth="0.5"
                          strokeDasharray="2,2"
                        />
                        <circle cx={x} cy="40" r="2" fill="#22c55e" />
                      </g>
                    ))}
                    {/* Axis */}
                    <line
                      x1="0"
                      y1="90"
                      x2="100"
                      y2="90"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="10"
                      y1="10"
                      x2="10"
                      y2="90"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    {/* Labels */}
                    <text
                      x="20"
                      y="98"
                      fill="white"
                      fontSize="6"
                      textAnchor="middle"
                    >
                      a
                    </text>
                    <text
                      x="80"
                      y="98"
                      fill="white"
                      fontSize="6"
                      textAnchor="middle"
                    >
                      b
                    </text>
                    <text
                      x="5"
                      y="42"
                      fill="white"
                      fontSize="5"
                      textAnchor="end"
                    >
                      1/n
                    </text>
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <h4 className="font-semibold text-white text-lg">
                    Key Statistics
                  </h4>
                  <ul className="text-neutral-300 space-y-2 mt-4 text-sm">
                    <li>
                      <strong>Mean:</strong> (n + 1) / 2 (for a=1 to b=n)
                    </li>
                    <li>
                      <strong>Median:</strong> (n + 1) / 2
                    </li>
                    <li>
                      <strong>Variance:</strong> (n² - 1) / 12
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <h4 className="font-semibold text-white text-lg">
                    Real Life Example
                  </h4>
                  <div className="mt-3 text-sm">
                    <p className="font-medium text-green-300">
                      1. Rolling a Die
                    </p>
                    <p className="text-neutral-300 mt-1 leading-relaxed">
                      When rolling a fair 6-sided die, each number (1, 2, 3, 4,
                      5, 6) has an identical probability of exactly 1/6.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "log_normal":
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
              Log-Normal Distribution
            </h3>
            <div className="flex items-center gap-3">
              <span className="bg-pink-600/30 text-pink-300 px-3 py-1 rounded-full text-sm">
                Continuous
              </span>
              <span className="text-neutral-500 text-sm italic">
                Skewed Right
              </span>
            </div>

            <p className="text-lg text-neutral-200 mt-4 leading-relaxed">
              A random variable $X$ is log-normally distributed if the{" "}
              <strong>natural logarithm of $X$</strong> follows a normal
              distribution. Unlike the Normal distribution, it is{" "}
              <strong>skewed to the right</strong> and only contains positive
              values, making it perfect for modeling physical and financial
              growth.
            </p>

            {/* PDF Comparison Graph */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-6">
              <h4 className="text-white font-semibold mb-6 text-center text-sm">
                Log-Normal PDF Comparison (μ=0)
              </h4>
              <div className="flex flex-col items-center">
                <div className="flex flex-wrap justify-center gap-4 mb-4 text-[10px]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-0.5 bg-red-500 text-red-500"></div>
                    <span className="text-neutral-400">σ = 0.25</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-0.5 bg-green-500 text-green-500"></div>
                    <span className="text-neutral-400">σ = 0.5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-0.5 bg-blue-500 text-blue-500"></div>
                    <span className="text-neutral-400">σ = 1.0</span>
                  </div>
                </div>

                <div className="relative h-48 w-full max-w-md px-10 pb-6">
                  {/* Grid / Axis */}
                  <div className="absolute inset-0 border-l border-b border-white/10 ml-10 mb-6"></div>
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    {/* Curve 1: σ=1 (Blue - Flat/Long tail) */}
                    <path
                      d="M 0 90 C 5 80, 10 40, 20 60 S 60 85, 95 90"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="1.5"
                    />
                    {/* Curve 2: σ=0.5 (Green - Higher peak) */}
                    <path
                      d="M 0 90 C 10 90, 20 10, 35 30 S 60 85, 95 90"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="1.5"
                    />
                    {/* Curve 3: σ=0.25 (Red - Sharpest peak) */}
                    <path
                      d="M 15 90 C 25 90, 30 5, 40 40 S 55 90, 80 90"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <div className="absolute bottom-0 left-10 w-full flex justify-between text-[8px] text-neutral-500 px-2 mt-2">
                    <span>0.0</span>
                    <span>0.5</span>
                    <span>1.0</span>
                    <span>1.5</span>
                    <span>2.0</span>
                    <span>2.5</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="font-semibold text-white text-lg">
                  Key Statistics
                </h4>
                <ul className="text-neutral-300 space-y-3 mt-3 text-sm">
                  <li>
                    <strong>Mean:</strong> exp(μ + σ²/2)
                  </li>
                  <li>
                    <strong>Median:</strong> exp(μ)
                  </li>
                  <li>
                    <strong>Mode:</strong> exp(μ - σ²)
                  </li>
                  <li>
                    <strong>Bound:</strong> Always positive (X &gt; 0).
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="font-semibold text-white text-lg">
                  Real Life Example
                </h4>
                <div className="space-y-4 mt-3 text-sm">
                  <div>
                    <p className="font-medium text-pink-300">1. Finance</p>
                    <p className="text-neutral-300 mt-1 leading-relaxed">
                      Stock prices are modeled using log-normal distributions
                      because they cannot go below zero and often exhibit rapid
                      growth.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-pink-300">2. Biology</p>
                    <p className="text-neutral-300 mt-1 leading-relaxed">
                      The size of an organism or cellular growth over time often
                      follows a log-normal distribution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversion Section */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-8 text-center text-lg">
                Conversion: Log-Normal to Normal
              </h4>
              <div className="flex flex-col md:flex-row items-center justify-around gap-10">
                {/* Log-Normal (Skewed) */}
                <div className="flex-1 text-center">
                  <p className="text-xs text-neutral-500 mb-4 font-bold tracking-widest uppercase">
                    Log-Normal ($X$)
                  </p>
                  <div className="relative h-32 w-full">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 5 95 C 10 95, 20 10, 35 40 S 90 95, 95 95"
                        fill="none"
                        stroke="#ec4899"
                        strokeWidth="2"
                      />
                      <line
                        x1="0"
                        y1="95"
                        x2="100"
                        y2="95"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                  <p className="text-[10px] text-pink-400 mt-2 italic font-medium underline underline-offset-4 decoration-pink-500/30">
                    Heavily skewed right
                  </p>
                </div>

                {/* Arrow with math */}
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-neutral-800 px-4 py-2 rounded border border-neutral-700">
                    <p className="text-white font-mono text-sm tracking-tighter">
                      Y = ln(X)
                    </p>
                  </div>
                  <div className="text-neutral-600">
                    <svg
                      className="w-6 h-6 rotate-90 md:rotate-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Normal (Symmetric) */}
                <div className="flex-1 text-center">
                  <p className="text-xs text-neutral-500 mb-4 font-bold tracking-widest uppercase">
                    Normal ($Y$)
                  </p>
                  <div className="relative h-32 w-full">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 5 95 C 25 95, 40 10, 50 10 S 75 95, 95 95"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                      />
                      <line
                        x1="0"
                        y1="95"
                        x2="100"
                        y2="95"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                  <p className="text-[10px] text-blue-400 mt-2 italic font-medium underline underline-offset-4 decoration-blue-500/30">
                    Symmetric bell curve
                  </p>
                </div>
              </div>
              <p className="text-sm text-neutral-400 mt-10 text-center leading-relaxed max-w-lg mx-auto border-t border-white/5 pt-6">
                By taking the <strong>Natural Log (ln)</strong> of log-normally
                distributed data, the skewness is "neutralized" and the data
                transforms into a standard Normal Distribution.
              </p>
            </div>
          </div>
        );
      case "power_law":
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
              Power Law Distribution
            </h3>

            <p className="text-lg text-neutral-200 mt-4 leading-relaxed">
              A Power Law distribution is a relationship between two quantities
              where a relative change in one results in a proportional relative
              change in the other, regardless of the initial size. It is famous
              for its <strong>"Long Tail,"</strong> where a tiny number of
              events account for a huge percentage of the total impact.
            </p>

            {/* Power Law Curve Graph */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-6">
              <h4 className="text-white font-semibold mb-6 text-center text-sm italic underline underline-offset-4 decoration-white/20">
                Frequency vs Impact (Power-Law Curve)
              </h4>
              <div className="relative h-64 w-full px-12 pb-8">
                {/* Y-Axis Label */}
                <div className="absolute left-0 top-0 h-full flex items-center">
                  <span className="text-[10px] text-neutral-500 -rotate-90 origin-center whitespace-nowrap -ml-4">
                    Number of Occurrences
                  </span>
                </div>

                <div className="relative w-full h-full border-b border-l border-white/20">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    {/* Histogram Bars (blue) */}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                      (i) => {
                        const height = 90 / Math.pow(i, 0.82);
                        return (
                          <rect
                            key={i}
                            x={i * 6}
                            y={90 - height}
                            width="4"
                            height={height}
                            fill="rgba(59, 130, 246, 0.4)"
                            stroke="rgba(59, 130, 246, 0.6)"
                            strokeWidth="0.5"
                          />
                        );
                      }
                    )}
                    {/* Power Law Line (black/dark) */}
                    <path
                      d="M 6 10 C 10 40, 30 80, 95 90"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      className="opacity-80"
                    />
                  </svg>
                  {/* Legend Overlay */}
                  <div className="absolute top-2 right-2 bg-black/40 border border-white/10 p-2 text-[10px] rounded backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-blue-500/40 border border-blue-400/60"></div>
                      <span className="text-neutral-300">number</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-0.5 bg-white"></div>
                      <span className="text-neutral-300 italic">
                        power-law distribution curve
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-center text-[10px] text-neutral-500 mt-2">
                  Quality / Magnitude
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="font-semibold text-white text-lg">
                  The 80/20 Rule
                </h4>
                <div className="bg-pink-600/10 p-3 rounded mt-3 border-l-4 border-pink-500">
                  <p className="text-pink-300 text-sm italic font-medium">
                    "80% of consequences come from 20% of causes."
                  </p>
                </div>
                <p className="text-neutral-300 mt-4 text-sm leading-relaxed">
                  In a power law environment, the majority of the distribution
                  is in the "tail." For example, in business, 80% of sales often
                  come from 20% of the clients.
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="font-semibold text-white text-lg">
                  Real Life Examples
                </h4>
                <div className="space-y-4 mt-3 text-sm">
                  <div>
                    <p className="font-medium text-blue-300">
                      1. Wealth Distribution
                    </p>
                    <p className="text-neutral-300 mt-1 leading-relaxed">
                      A small percentage of the population holds the vast
                      majority of wealth, following a power-law pattern.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-300">2. Social Media</p>
                    <p className="text-neutral-300 mt-1 leading-relaxed">
                      A tiny fraction of users (influencers) garner the vast
                      majority of the platform's engagement and reach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box-Cox Transformation Section */}
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-8 text-center text-lg">
                Transformation: Power-Law to Normal (Box-Cox)
              </h4>
              <div className="flex flex-col md:flex-row items-center justify-around gap-10">
                {/* Power Law (Curve) */}
                <div className="flex-1 text-center">
                  <p className="text-xs text-neutral-500 mb-4 font-bold tracking-widest uppercase">
                    Power-Law Curve
                  </p>
                  <div className="relative h-32 w-full p-2">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 5 10 C 10 60, 40 90, 95 95"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2.5"
                      />
                      <line
                        x1="0"
                        y1="95"
                        x2="100"
                        y2="95"
                        stroke="white"
                        strokeWidth="1"
                      />
                      <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="95"
                        stroke="white"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>

                {/* Arrow with Algorithm Name */}
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-neutral-800 px-4 py-2 rounded-lg border border-neutral-700 text-[11px] font-bold text-pink-400 shadow-lg">
                    Box-Cox Algorithm
                  </div>
                  <svg
                    className="w-6 h-6 text-neutral-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>

                {/* Normal (Bell Curve) */}
                <div className="flex-1 text-center">
                  <p className="text-xs text-neutral-500 mb-4 font-bold tracking-widest uppercase">
                    Bell Curve (Normal)
                  </p>
                  <div className="relative h-32 w-full p-2">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 5 95 Q 50 10 95 95"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="2.5"
                      />
                      <line
                        x1="0"
                        y1="95"
                        x2="100"
                        y2="95"
                        stroke="white"
                        strokeWidth="1"
                      />
                      <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="95"
                        stroke="white"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-black/20 p-4 rounded-lg text-sm text-neutral-300 border-l-2 border-blue-500">
                <p>
                  The <strong>Box-Cox Transformation</strong> is a statistical
                  technique used to transform non-normal data into a normal
                  shape (Y = (X^λ - 1) / λ). It is essential for using power-law
                  data in predictive models that assume a Gaussian (Bell Curve)
                  distribution.
                </p>
              </div>
            </div>
          </div>
        );
      case "pareto":
        return (
          <div className="space-y-12">
            {/* Pareto Section */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                Pareto Distribution
              </h3>
              <p className="text-lg text-neutral-200 mt-4 leading-relaxed">
                The Pareto Distribution is a power-law probability distribution
                commonly used to describe social, scientific, and geophysical
                phenomena. It is most famous for the <strong>80/20 Rule</strong>
                , which suggests that roughly 80% of effects come from 20% of
                causes. In this distribution, the probability of a large event
                occurring is small, but not impossible (the "long tail").
              </p>

              {/* Pareto Graph */}
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 my-6">
                <h4 className="text-white font-semibold mb-6 text-center text-sm italic underline underline-offset-4 decoration-white/20">
                  Pareto PDF: Varying Alpha (α) with Scale x_m = 1
                </h4>
                <div className="relative h-64 w-full px-12 pb-8">
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-neutral-500 py-1 items-end pr-2 w-10">
                    <span>3.0</span>
                    <span>2.5</span>
                    <span>2.0</span>
                    <span>1.5</span>
                    <span>1.0</span>
                    <span>0.5</span>
                    <span>0.0</span>
                  </div>

                  <div className="relative w-full h-full border-b border-l border-white/20">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      {/* Alpha = Infinity (Black line) */}
                      <line
                        x1="10"
                        y1="100"
                        x2="10"
                        y2="0"
                        stroke="white"
                        strokeWidth="1.5"
                        className="opacity-50"
                      />

                      {/* Alpha = 1 (Green) - Starts at y=1.0 (66.6% down) */}
                      <path
                        d="M 10 66.6 Q 30 90, 95 98"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="2"
                      />
                      <circle cx="10" cy="66.6" r="1.5" fill="#22c55e" />

                      {/* Alpha = 2 (Blue) - Starts at y=2.0 (33.3% down) */}
                      <path
                        d="M 10 33.3 Q 20 85, 95 98"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                      />
                      <circle cx="10" cy="33.3" r="1.5" fill="#3b82f6" />

                      {/* Alpha = 3 (Red) - Starts at y=3.0 (top) */}
                      <path
                        d="M 10 0 Q 15 80, 95 98"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2"
                      />
                      <circle cx="10" cy="0" r="1.5" fill="#ef4444" />
                    </svg>

                    {/* Legend Table */}
                    <div className="absolute top-2 right-2 bg-black/60 p-2 rounded border border-white/10 text-[10px] space-y-1 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-0.5 bg-white opacity-50"></div>
                        <span className="text-neutral-300">α = ∞</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span className="text-neutral-300">α = 3</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-neutral-300">α = 2</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-neutral-300">α = 1</span>
                      </div>
                    </div>
                  </div>
                  {/* X-axis ticks */}
                  <div className="flex justify-between text-[10px] text-neutral-500 mt-2 ml-10">
                    <span>1 (xm)</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <h4 className="font-semibold text-white text-lg">
                    Key Statistics
                  </h4>
                  <ul className="text-neutral-300 space-y-3 mt-3 text-sm">
                    <li>
                      <strong>Mean:</strong> (α · xm) / (α - 1) — for α &gt; 1
                    </li>
                    <li>
                      <strong>Variance:</strong> [α · xm²] / [(α-1)²(α-2)] — for
                      α &gt; 2
                    </li>
                    <li>
                      <strong>Median:</strong> xm · 2^(1/α)
                    </li>
                    <li>
                      <strong>Threshold:</strong> Probability is zero for x &lt;
                      x_m.
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <h4 className="font-semibold text-white text-lg">
                    Real Life Examples
                  </h4>
                  <div className="space-y-4 mt-3 text-sm">
                    <div>
                      <p className="font-medium text-emerald-300">
                        1. Economics
                      </p>
                      <p className="text-neutral-300 mt-1 leading-relaxed">
                        Vilfredo Pareto observed that 80% of the land in Italy
                        was owned by 20% of the population, leading to the 80/20
                        rule.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-emerald-300">
                        2. Software Engineering
                      </p>
                      <p className="text-neutral-300 mt-1 leading-relaxed">
                        In many software systems, 80% of execution time is spent
                        in only 20% of the code, highlighting critical
                        optimization paths.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Central Limit Theorem Section */}
            <section className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
                Central Limit Theorem (CLT)
              </h3>
              <p className="text-lg text-neutral-200 mt-4 leading-relaxed">
                The CLT is the most powerful "bridge" in statistics. It allows
                researchers to use the tools of the Normal Distribution to
                analyze <strong>any</strong> data, even if the underlying
                population is skewed, uniform, or completely irregular.
              </p>

              {/* CLT Transformation Graphic */}
              <div className="bg-white/5 p-8 rounded-xl border border-white/10 my-8">
                <h4 className="text-white font-semibold mb-10 text-center text-lg">
                  Visualizing the Sampling Distribution
                </h4>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  {/* Step 1: Population */}
                  <div className="flex-1 text-center w-full">
                    <p className="text-[10px] text-neutral-500 mb-4 font-black uppercase tracking-widest text-center">
                      Population Distribution
                    </p>
                    <div className="relative h-40 w-full bg-neutral-900/50 rounded-lg p-3 border border-white/5 shadow-inner">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        {/* A "Double Humped" / Irregular Population */}
                        <path
                          d="M 5 95 C 10 95, 20 10, 35 40 C 45 60, 55 10, 80 40 C 90 60, 95 95, 95 95"
                          fill="#475569"
                          fillOpacity="0.2"
                          stroke="#94a3b8"
                          strokeWidth="2"
                        />
                        <line
                          x1="45"
                          y1="10"
                          x2="45"
                          y2="95"
                          stroke="white"
                          strokeWidth="1"
                          strokeDasharray="2"
                          className="opacity-20"
                        />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] uppercase font-bold text-white/20">
                        Irregular Base
                      </div>
                    </div>
                  </div>

                  {/* Sampling Logic */}
                  <div className="flex lg:flex-col items-center gap-4 text-neutral-500">
                    <div className="hidden lg:block text-[10px] font-bold">
                      Samples of size n
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-1 h-1 bg-blue-500 rounded-full animate-ping"></div>
                      <svg
                        className="w-8 h-8 rotate-90 lg:rotate-0 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                    <p className="text-[10px] italic font-bold">x̄₁, x̄₂... x̄ₙ</p>
                  </div>

                  {/* Step 2: Sampling Distribution */}
                  <div className="flex-1 text-center w-full">
                    <p className="text-[10px] text-neutral-500 mb-4 font-black uppercase tracking-widest text-center">
                      Sampling Distribution (of Mean)
                    </p>
                    <div className="relative h-40 w-full bg-blue-900/10 rounded-lg p-3 border border-blue-500/20 shadow-inner">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        {/* Perfect Gaussian Curve */}
                        <path
                          d="M 10 95 C 30 95, 45 5, 50 5 S 70 95, 90 95"
                          fill="rgba(59, 130, 246, 0.1)"
                          stroke="#3b82f6"
                          strokeWidth="3"
                        />
                        {/* Width marker for Standard Error */}
                        <line
                          x1="40"
                          y1="50"
                          x2="60"
                          y2="50"
                          stroke="#60a5fa"
                          strokeWidth="1"
                        />
                        <text
                          x="50"
                          y="45"
                          fill="#3b82f6"
                          fontSize="6"
                          textAnchor="middle"
                        >
                          σ / √n
                        </text>
                      </svg>
                      <div className="absolute top-2 right-2 flex items-center gap-1">
                        <span className="text-[8px] font-bold text-blue-400">
                          GAUSSIAN
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <h4 className="font-semibold text-white text-lg">
                    The Rule of 30
                  </h4>
                  <p className="text-neutral-300 mt-3 text-sm leading-relaxed">
                    Statisticians generally agree that a sample size of{" "}
                    <strong>n ≥ 30</strong> is sufficient to ensure the sampling
                    distribution of the mean is approximately normal, even if
                    the population distribution is heavily skewed.
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded border border-white/10">
                  <h4 className="font-semibold text-white text-lg">
                    Real Life Example
                  </h4>
                  <div className="mt-3 text-sm">
                    <p className="font-medium text-blue-300">
                      1. Quality Control
                    </p>
                    <p className="text-neutral-300 mt-1 leading-relaxed">
                      If a factory produces millions of lightbulbs with highly
                      variable lifespans, we can still predict the *average*
                      lifespan of a batch of 100 bulbs with incredible precision
                      using CLT.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  const renderContent = () => {
    if (isProbabilityBlog) {
      return renderProbabilityContent();
    }
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                Project Overview
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                {isHackathonPlatform
                  ? "HackPub is a sleek, modern platform for creating, managing, and participating in hackathons worldwide. Built with React 18, TypeScript, and MongoDB, it features stunning 3D UI effects, glassmorphism design, Google OAuth authentication, Razorpay payment integration, and AI-powered project evaluation using Google Gemini AI."
                  : "The Government Services Platform is a comprehensive full-stack web application designed to streamline access to government services. Built with modern technologies like React, TypeScript, Node.js, Express, and PostgreSQL, this platform serves as a one-stop solution for citizens to access various government schemes, certificates, and contact information."}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-2">
                Key Objectives
              </h4>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                {isHackathonPlatform ? (
                  <>
                    <li>Create modern hackathon platform with 3D UI effects</li>
                    <li>
                      Implement secure Google OAuth and session management
                    </li>
                    <li>
                      Enable comprehensive hackathon and participant management
                    </li>
                    <li>
                      Integrate payment processing and AI project evaluation
                    </li>
                    <li>Provide real-time updates and beautiful animations</li>
                  </>
                ) : (
                  <>
                    <li>Digitize government service delivery</li>
                    <li>
                      Provide secure user authentication and authorization
                    </li>
                    <li>
                      Enable efficient service management for administrators
                    </li>
                    <li>Offer responsive design for all device types</li>
                    <li>Implement real-time data synchronization</li>
                  </>
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-2">
                Architecture
              </h4>
              <p className="text-neutral-300 leading-relaxed">
                {isHackathonPlatform
                  ? "The application features a modern React 18 frontend with TypeScript, utilizing Vite for lightning-fast builds. The backend is powered by Node.js and Express with MongoDB for flexible data storage. The platform includes advanced UI components with 3D effects, glassmorphism design, and particle backgrounds for an immersive user experience."
                  : "The application follows a monorepo structure with separate frontend and backend directories. The frontend is built with React 18 and TypeScript, utilizing Vite for fast development builds. The backend uses Express.js with Prisma ORM for database operations, ensuring type-safe database queries and migrations."}
              </p>
            </div>
          </div>
        );

      case "features":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {isHackathonPlatform
                  ? "Modern UI & User Experience"
                  : "User Services"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {isHackathonPlatform ? (
                  <>
                    <div className="bg-gradient-to-r from-midnight to-navy p-4 rounded-lg border border-white/10">
                      <h4 className="font-medium text-white mb-2">
                        3D Effects & Glassmorphism
                      </h4>
                      <p className="text-neutral-300 text-sm">
                        Sleek dark theme with neon accents, interactive 3D cards
                        with hover animations, and beautiful glassmorphism
                        design elements.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-midnight to-navy p-4 rounded-lg border border-white/10">
                      <h4 className="font-medium text-white mb-2">
                        Google OAuth Integration
                      </h4>
                      <p className="text-neutral-300 text-sm">
                        Secure sign-in/up with Google accounts, 24-hour sessions
                        with auto-refresh, and JWT token security.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-midnight to-navy p-4 rounded-lg border border-white/10">
                      <h4 className="font-medium text-white mb-2">
                        Hackathon Management
                      </h4>
                      <p className="text-neutral-300 text-sm">
                        Create & edit hackathons, advanced search & filtering,
                        participant management, and project submissions.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-midnight to-navy p-4 rounded-lg border border-white/10">
                      <h4 className="font-medium text-white mb-2">
                        Payment & AI Integration
                      </h4>
                      <p className="text-neutral-300 text-sm">
                        Razorpay integration for registration fees and Google
                        Gemini AI for automated project evaluation.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-gradient-to-r from-midnight to-navy p-4 rounded-lg border border-white/10">
                      <h4 className="font-medium text-white mb-2">
                        Scheme Services
                      </h4>
                      <p className="text-neutral-300 text-sm">
                        Browse and access various government schemes with
                        detailed information and application procedures.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-midnight to-navy p-4 rounded-lg border border-white/10">
                      <h4 className="font-medium text-white mb-2">
                        Certificate Services
                      </h4>
                      <p className="text-neutral-300 text-sm">
                        Apply for various certificates including birth, death,
                        income, and caste certificates online.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-midnight to-navy p-4 rounded-lg border border-white/10">
                      <h4 className="font-medium text-white mb-2">
                        Contact Services
                      </h4>
                      <p className="text-neutral-300 text-sm">
                        Find contact information for different government
                        departments and officials.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-midnight to-navy p-4 rounded-lg border border-white/10">
                      <h4 className="font-medium text-white mb-2">
                        Emergency Services
                      </h4>
                      <p className="text-neutral-300 text-sm">
                        Access emergency contacts and services for urgent
                        situations.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {isHackathonPlatform
                  ? "Smart Dashboard & Management"
                  : "Admin Dashboard"}
              </h3>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                {isHackathonPlatform ? (
                  <>
                    <li>
                      <strong>Role-Based Views:</strong> Different interfaces
                      for hosts and participants with tailored functionality
                    </li>
                    <li>
                      <strong>Hackathon Management:</strong> Create, edit, and
                      delete hackathons with custom details, dates, and rules
                    </li>
                    <li>
                      <strong>Project Submissions:</strong> Normalized
                      submission system with winner declaration and project
                      evaluation
                    </li>
                    <li>
                      <strong>Analytics & Stats:</strong> Track participation,
                      completion rates, and hackathon performance metrics
                    </li>
                    <li>
                      <strong>Payment Integration:</strong> Razorpay integration
                      for paid hackathon registration with secure verification
                    </li>
                    <li>
                      <strong>AI Evaluation:</strong> Google Gemini AI
                      integration for automated project scoring and evaluation
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <strong>Service Management:</strong> Create, edit, and
                      manage all government services
                    </li>
                    <li>
                      <strong>User Management:</strong> Manage user accounts and
                      permissions with role-based access
                    </li>
                    <li>
                      <strong>Content Management:</strong> Update service
                      information and documents
                    </li>
                    <li>
                      <strong>Analytics:</strong> View usage statistics and
                      generate reports
                    </li>
                    <li>
                      <strong>Feedback System:</strong> Monitor and respond to
                      user feedback
                    </li>
                    <li>
                      <strong>Grievance Portal:</strong> Track and resolve user
                      grievances
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        );

      case "tech":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Frontend Technologies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-white font-medium">
                      React 18 with TypeScript
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-white font-medium">
                      {isHackathonPlatform
                        ? "Vite for fast builds"
                        : "Vite for build tooling"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-white font-medium">
                      Tailwind CSS for styling
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-white font-medium">
                      {isHackathonPlatform
                        ? "shadcn/ui components"
                        : "Radix UI components"}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-white font-medium">
                      React Router for navigation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-white font-medium">
                      {isHackathonPlatform
                        ? "React OAuth Google"
                        : "React Query for state management"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-white font-medium">
                      {isHackathonPlatform
                        ? "Framer Motion animations"
                        : "React Hook Form"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Backend Technologies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <span className="text-white font-medium">
                      Node.js with TypeScript
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <span className="text-white font-medium">
                      Express.js web framework
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-white font-medium">
                      {isHackathonPlatform
                        ? "MongoDB with Mongoose"
                        : "Prisma ORM with PostgreSQL"}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                    <span className="text-white font-medium">
                      JWT for authentication
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                    <span className="text-white font-medium">
                      {isHackathonPlatform
                        ? "Razorpay & Google Gemini AI"
                        : "Express Validator"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
                    <span className="text-white font-medium">
                      {isHackathonPlatform
                        ? "ESLint & tsx tooling"
                        : "Bcrypt & Multer"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "api":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                API Endpoints
              </h3>
              <p className="text-neutral-300 mb-4">
                {isHackathonPlatform
                  ? "The backend provides RESTful API endpoints for hackathon management:"
                  : "The backend provides RESTful API endpoints for all services:"}
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-midnight to-navy p-4 rounded-lg border border-white/10">
                <h4 className="font-medium text-white mb-2">Authentication</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3">
                    <span className="bg-green-600 px-2 py-1 rounded text-xs">
                      POST
                    </span>
                    <span className="text-neutral-300">
                      {isHackathonPlatform
                        ? "/api/auth/google"
                        : "/api/auth/login"}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                      {isHackathonPlatform ? "GET" : "POST"}
                    </span>
                    <span className="text-neutral-300">
                      {isHackathonPlatform
                        ? "/api/auth/session"
                        : "/api/auth/register"}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-orange-600 px-2 py-1 rounded text-xs">
                      POST
                    </span>
                    <span className="text-neutral-300">/api/auth/logout</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-midnight to-navy p-4 rounded-lg border border-white/10">
                <h4 className="font-medium text-white mb-2">
                  {isHackathonPlatform
                    ? "Hackathon Management"
                    : "Scheme Services"}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                      GET
                    </span>
                    <span className="text-neutral-300">
                      {isHackathonPlatform ? "/api/hackathons" : "/api/schemes"}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                      GET
                    </span>
                    <span className="text-neutral-300">
                      {isHackathonPlatform
                        ? "/api/hackathons/:id"
                        : "/api/schemes/:id"}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-green-600 px-2 py-1 rounded text-xs">
                      POST
                    </span>
                    <span className="text-neutral-300">
                      {isHackathonPlatform ? "/api/hackathons" : "/api/schemes"}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-yellow-600 px-2 py-1 rounded text-xs">
                      {isHackathonPlatform ? "DELETE" : "PUT"}
                    </span>
                    <span className="text-neutral-300">
                      {isHackathonPlatform
                        ? "/api/hackathons/:id"
                        : "/api/schemes/:id"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-midnight to-navy p-4 rounded-lg border border-white/10">
                <h4 className="font-medium text-white mb-2">
                  {isHackathonPlatform
                    ? "Project Submissions"
                    : "Certificate Services"}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                      GET
                    </span>
                    <span className="text-neutral-300">
                      {isHackathonPlatform
                        ? "/api/hackathons/:id/submissions"
                        : "/api/certificates"}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-green-600 px-2 py-1 rounded text-xs">
                      POST
                    </span>
                    <span className="text-neutral-300">
                      {isHackathonPlatform
                        ? "/api/hackathons/:id/submissions"
                        : "/api/certificates/apply"}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                      {isHackathonPlatform ? "POST" : "GET"}
                    </span>
                    <span className="text-neutral-300">
                      {isHackathonPlatform
                        ? "/api/hackathons/:id/declare-winner"
                        : "/api/certificates/status/:id"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-midnight to-navy p-4 rounded-lg border border-white/10">
                <h4 className="font-medium text-white mb-2">
                  {isHackathonPlatform
                    ? "Payment & Registration"
                    : "Admin Dashboard"}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                      {isHackathonPlatform ? "POST" : "GET"}
                    </span>
                    <span className="text-neutral-300">
                      {isHackathonPlatform
                        ? "/api/payments/create-order"
                        : "/api/admin/users"}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                      {isHackathonPlatform ? "POST" : "GET"}
                    </span>
                    <span className="text-neutral-300">
                      {isHackathonPlatform
                        ? "/api/payments/verify"
                        : "/api/admin/analytics"}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-green-600 px-2 py-1 rounded text-xs">
                      POST
                    </span>
                    <span className="text-neutral-300">
                      {isHackathonPlatform
                        ? "/api/hackathons/:id/register"
                        : "/api/admin/services"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "setup":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Development Setup
              </h3>
              <p className="text-neutral-300 mb-4">
                Follow these steps to set up the project locally:
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2">Prerequisites</h4>
                <ul className="list-disc list-inside text-neutral-300 space-y-1">
                  <li>Node.js (v18 or higher)</li>
                  <li>
                    {isHackathonPlatform
                      ? "MongoDB (local or Atlas)"
                      : "PostgreSQL database"}
                  </li>
                  <li>npm or yarn package manager</li>
                  {isHackathonPlatform && (
                    <>
                      <li>Google OAuth credentials (for login)</li>
                      <li>Razorpay API keys (for payments)</li>
                    </>
                  )}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">
                  Installation Steps
                </h4>
                <div className="space-y-3">
                  <div className="bg-gray-900 p-3 rounded-lg overflow-x-auto">
                    <p className="text-neutral-400 text-sm mb-1">
                      1. Clone the repository
                    </p>
                    <code className="text-green-400 text-xs md:text-sm block">
                      git clone https://github.com/udai7/hackathon-platform.git
                    </code>
                    <code className="text-green-400 text-xs md:text-sm block">
                      cd{" "}
                      {isHackathonPlatform
                        ? "hackathon-platform"
                        : "government-services-platform"}
                    </code>
                  </div>

                  <div className="bg-gray-900 p-3 rounded-lg">
                    <p className="text-neutral-400 text-sm mb-1">
                      2. Install dependencies
                    </p>
                    <code className="text-green-400 text-sm">
                      {isHackathonPlatform
                        ? "npm install"
                        : "npm run install:all"}
                    </code>
                  </div>

                  <div className="bg-gray-900 p-3 rounded-lg overflow-x-auto">
                    <p className="text-neutral-400 text-sm mb-1">
                      3. Set up environment variables
                    </p>
                    {isHackathonPlatform ? (
                      <>
                        <code className="text-green-400 text-xs md:text-sm block">
                          MONGODB_URI=your-mongodb-uri
                        </code>
                        <code className="text-green-400 text-xs md:text-sm block">
                          JWT_SECRET=your-jwt-secret
                        </code>
                        <code className="text-green-400 text-xs md:text-sm block">
                          GOOGLE_CLIENT_ID=your-google-client-id
                        </code>
                        <code className="text-green-400 text-xs md:text-sm block">
                          RAZORPAY_KEY_ID=your-razorpay-key-id
                        </code>
                      </>
                    ) : (
                      <>
                        <code className="text-green-400 text-xs md:text-sm block">
                          DATABASE_URL="postgresql://username:password@localhost:5432/government_services"
                        </code>
                        <code className="text-green-400 text-xs md:text-sm block">
                          JWT_SECRET="your-jwt-secret-key"
                        </code>
                        <code className="text-green-400 text-xs md:text-sm block">
                          PORT=3001
                        </code>
                      </>
                    )}
                  </div>

                  {!isHackathonPlatform && (
                    <div className="bg-gray-900 p-3 rounded-lg">
                      <p className="text-neutral-400 text-sm mb-1">
                        4. Set up the database
                      </p>
                      <code className="text-green-400 text-sm block">
                        npm run db:generate
                      </code>
                      <code className="text-green-400 text-sm block">
                        npm run db:push
                      </code>
                    </div>
                  )}

                  <div className="bg-gray-900 p-3 rounded-lg">
                    <p className="text-neutral-400 text-sm mb-1">
                      {isHackathonPlatform
                        ? "4. Start the application"
                        : "5. Start development servers"}
                    </p>
                    <code className="text-green-400 text-sm block">
                      {isHackathonPlatform ? "npm run dev:full" : "npm run dev"}
                    </code>
                    {isHackathonPlatform && (
                      <>
                        <p className="text-neutral-400 text-xs mt-2">
                          Or run separately:
                        </p>
                        <code className="text-green-400 text-xs block">
                          Backend: npm run server
                        </code>
                        <code className="text-green-400 text-xs block">
                          Frontend: npm run dev
                        </code>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">
                  Available Scripts
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-gradient-to-r from-midnight to-navy p-3 rounded-lg border border-white/10">
                    <code className="text-cyan-400 text-sm">npm run dev</code>
                    <p className="text-neutral-300 text-xs mt-1">
                      Start both frontend and backend
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-midnight to-navy p-3 rounded-lg border border-white/10">
                    <code className="text-cyan-400 text-sm">npm run build</code>
                    <p className="text-neutral-300 text-xs mt-1">
                      Build for production
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-midnight to-navy p-3 rounded-lg border border-white/10">
                    <code className="text-cyan-400 text-sm">
                      npm run db:studio
                    </code>
                    <p className="text-neutral-300 text-xs mt-1">
                      Open Prisma Studio
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-midnight to-navy p-3 rounded-lg border border-white/10">
                    <code className="text-cyan-400 text-sm">
                      npm run db:migrate
                    </code>
                    <p className="text-neutral-300 text-xs mt-1">
                      Run database migrations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "deployment":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Production Deployment
              </h3>
              <p className="text-neutral-300 mb-4">
                Steps to deploy the application to production:
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2">
                  Building for Production
                </h4>
                <div className="bg-gray-900 p-3 rounded-lg">
                  <code className="text-green-400 text-sm">npm run build</code>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">
                  Environment Configuration
                </h4>
                <div className="bg-gray-900 p-3 rounded-lg space-y-1 overflow-x-auto">
                  {isHackathonPlatform ? (
                    <>
                      <code className="text-green-400 text-xs md:text-sm block">
                        PORT=5000
                      </code>
                      <code className="text-green-400 text-xs md:text-sm block whitespace-nowrap">
                        MONGODB_URI=your-production-mongodb-uri
                      </code>
                      <code className="text-green-400 text-xs md:text-sm block">
                        JWT_SECRET=your-secure-jwt-secret
                      </code>
                      <code className="text-green-400 text-xs md:text-sm block">
                        SESSION_SECRET=your-session-secret
                      </code>
                      <code className="text-green-400 text-xs md:text-sm block">
                        GOOGLE_CLIENT_ID=your-google-client-id
                      </code>
                      <code className="text-green-400 text-xs md:text-sm block">
                        RAZORPAY_KEY_ID=your-razorpay-key-id
                      </code>
                    </>
                  ) : (
                    <>
                      <code className="text-green-400 text-xs md:text-sm block whitespace-nowrap">
                        DATABASE_URL="postgresql://user:password@host:port/database"
                      </code>
                      <code className="text-green-400 text-xs md:text-sm block">
                        JWT_SECRET="your-secure-jwt-secret"
                      </code>
                      <code className="text-green-400 text-xs md:text-sm block">
                        NODE_ENV="production"
                      </code>
                      <code className="text-green-400 text-xs md:text-sm block whitespace-nowrap">
                        CORS_ORIGIN="https://your-frontend-domain.com"
                      </code>
                    </>
                  )}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">
                  {isHackathonPlatform
                    ? "Server Deployment"
                    : "Backend Deployment"}
                </h4>
                <ul className="list-disc list-inside text-neutral-300 space-y-1">
                  {isHackathonPlatform ? (
                    <>
                      <li>
                        Deploy to platforms like Heroku, Railway, or
                        DigitalOcean
                      </li>
                      <li>Set up MongoDB Atlas for production database</li>
                      <li>
                        Configure environment variables on hosting platform
                      </li>
                      <li>Set up process manager (PM2) for Node.js server</li>
                    </>
                  ) : (
                    <>
                      <li>Upload backend/dist folder to your server</li>
                      <li>Install production dependencies</li>
                      <li>Set up process manager (PM2 recommended)</li>
                      <li>Configure production database</li>
                    </>
                  )}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">
                  Frontend Deployment
                </h4>
                <ul className="list-disc list-inside text-neutral-300 space-y-1">
                  {isHackathonPlatform ? (
                    <>
                      <li>Build the React app with `npm run build`</li>
                      <li>Deploy to Vercel, Netlify, or similar platforms</li>
                      <li>Configure environment variables for production</li>
                      <li>Set up custom domain and SSL certificates</li>
                    </>
                  ) : (
                    <>
                      <li>Upload frontend/dist folder to web server</li>
                      <li>Configure web server (Nginx/Apache)</li>
                      <li>Set up reverse proxy to backend API</li>
                      <li>Configure SSL certificates</li>
                    </>
                  )}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">
                  {isHackathonPlatform
                    ? "MongoDB Collections"
                    : "Database Schema"}
                </h4>
                <p className="text-neutral-300 mb-2">
                  {isHackathonPlatform
                    ? "Key collections in the MongoDB database:"
                    : "Key entities in the PostgreSQL database:"}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {isHackathonPlatform ? (
                    <>
                      <div className="bg-gradient-to-r from-midnight to-navy p-2 rounded border border-white/10">
                        <span className="text-cyan-400 text-sm">User</span>
                      </div>
                      <div className="bg-gradient-to-r from-midnight to-navy p-2 rounded border border-white/10">
                        <span className="text-cyan-400 text-sm">Hackathon</span>
                      </div>
                      <div className="bg-gradient-to-r from-midnight to-navy p-2 rounded border border-white/10">
                        <span className="text-cyan-400 text-sm">
                          Submission
                        </span>
                      </div>
                      <div className="bg-gradient-to-r from-midnight to-navy p-2 rounded border border-white/10">
                        <span className="text-cyan-400 text-sm">Payment</span>
                      </div>
                      <div className="bg-gradient-to-r from-midnight to-navy p-2 rounded border border-white/10">
                        <span className="text-cyan-400 text-sm">
                          Registration
                        </span>
                      </div>
                      <div className="bg-gradient-to-r from-midnight to-navy p-2 rounded border border-white/10">
                        <span className="text-cyan-400 text-sm">Winner</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-gradient-to-r from-midnight to-navy p-2 rounded border border-white/10">
                        <span className="text-cyan-400 text-sm">Admin</span>
                      </div>
                      <div className="bg-gradient-to-r from-midnight to-navy p-2 rounded border border-white/10">
                        <span className="text-cyan-400 text-sm">
                          SchemeService
                        </span>
                      </div>
                      <div className="bg-gradient-to-r from-midnight to-navy p-2 rounded border border-white/10">
                        <span className="text-cyan-400 text-sm">
                          CertificateService
                        </span>
                      </div>
                      <div className="bg-gradient-to-r from-midnight to-navy p-2 rounded border border-white/10">
                        <span className="text-cyan-400 text-sm">
                          ContactService
                        </span>
                      </div>
                      <div className="bg-gradient-to-r from-midnight to-navy p-2 rounded border border-white/10">
                        <span className="text-cyan-400 text-sm">
                          EmergencyService
                        </span>
                      </div>
                      <div className="bg-gradient-to-r from-midnight to-navy p-2 rounded border border-white/10">
                        <span className="text-cyan-400 text-sm">Feedback</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {isHackathonPlatform && (
                <div>
                  <h4 className="font-medium text-white mb-2">
                    Migration & Tooling
                  </h4>
                  <ul className="list-disc list-inside text-neutral-300 space-y-1">
                    <li>
                      TypeScript migration script for normalizing legacy
                      submissions
                    </li>
                    <li>
                      Run `npm run migrate:submissions` for historical data
                      migration
                    </li>
                    <li>
                      ESLint for code quality and tsx for TypeScript execution
                    </li>
                    <li>
                      Concurrently for running frontend and backend together
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const content = (
    <div
      className={`flex flex-col md:flex-row ${
        isPage ? "min-h-full" : "h-full"
      }`}
    >
      {/* Mobile Header */}
      <div className="md:hidden bg-gradient-to-r from-midnight to-navy border-b border-white/10 p-4">
        <h2 className="text-lg font-bold text-white mb-3 pr-8">{blog.title}</h2>
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {Object.entries(sections).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm transition-colors ${
                activeSection === key
                  ? "bg-white/10 text-white"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={`hidden md:block w-64 bg-gradient-to-b from-midnight to-navy border-r border-white/10 p-4 ${
          isPage ? "sticky top-16 h-[calc(100vh-64px)]" : ""
        }`}
      >
        <h2 className="text-xl font-bold text-white mb-6 pr-8">{blog.title}</h2>
        <nav className="space-y-2">
          {Object.entries(sections).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                activeSection === key
                  ? "bg-white/10 text-white"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div
        className={`flex-1 ${
          isPage ? "overflow-visible" : "overflow-y-auto custom-scrollbar"
        }`}
      >
        <div className="p-4 md:p-6">
          <div className="min-h-full">{renderContent()}</div>
        </div>
      </div>
    </div>
  );

  if (isPage) {
    return (
      <div className="relative w-full min-h-[calc(100vh-64px)] mt-16 md:mt-20 border-t border-white/10 bg-gradient-to-l from-midnight to-navy overflow-visible">
        {content}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative w-[95vw] max-w-6xl h-[90vh] md:h-[85vh] border shadow-sm rounded-lg md:rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 overflow-hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={onClose}
          className="absolute flex items-center justify-center w-8 h-8 rounded-full top-3 right-3 md:top-5 md:right-5 bg-navy/80 hover:bg-white/10 text-white transition-all z-50 border border-white/10 shadow-lg group"
          title="Close"
        >
          <span className="text-xl font-light leading-none group-hover:scale-110 transition-transform">
            ✕
          </span>
        </button>

        {content}
      </motion.div>
    </div>
  );
};

export default BlogPost;
