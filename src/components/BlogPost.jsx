import { motion } from "motion/react";
import { useState } from "react";

const BlogPost = ({ blog, onClose }) => {
  const [activeSection, setActiveSection] = useState("overview");

  // Determine which project this is
  const isHackathonPlatform = blog.id === 103 || blog.title.includes("HackPub");
  const isGovernmentServices =
    blog.id === 102 || blog.title.includes("Government Services");

  const sections = {
    overview: "Overview",
    features: "Features",
    tech: "Technology Stack",
    api: "API Endpoints",
    setup: "Setup Guide",
    deployment: "Deployment",
  };

  const renderContent = () => {
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
                User Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-midnight to-navy p-4 rounded-lg border border-white/10">
                  <h4 className="font-medium text-white mb-2">
                    Scheme Services
                  </h4>
                  <p className="text-neutral-300 text-sm">
                    Browse and access various government schemes with detailed
                    information and application procedures.
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
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Admin Dashboard
              </h3>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>
                  <strong>Service Management:</strong> Create, edit, and manage
                  all government services
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
                  <strong>Analytics:</strong> View usage statistics and generate
                  reports
                </li>
                <li>
                  <strong>Feedback System:</strong> Monitor and respond to user
                  feedback
                </li>
                <li>
                  <strong>Grievance Portal:</strong> Track and resolve user
                  grievances
                </li>
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
                      Vite for build tooling
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
                      Radix UI components
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
                      React Query for state management
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-white font-medium">
                      React Hook Form
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
                      Prisma ORM with PostgreSQL
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
                      Express Validator
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-pink-600 rounded-full"></div>
                    <span className="text-white font-medium">
                      Bcrypt & Multer
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
                The backend provides RESTful API endpoints for all services:
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
                    <span className="text-neutral-300">/api/auth/login</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                      POST
                    </span>
                    <span className="text-neutral-300">/api/auth/register</span>
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
                <h4 className="font-medium text-white mb-2">Scheme Services</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                      GET
                    </span>
                    <span className="text-neutral-300">/api/schemes</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                      GET
                    </span>
                    <span className="text-neutral-300">/api/schemes/:id</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-green-600 px-2 py-1 rounded text-xs">
                      POST
                    </span>
                    <span className="text-neutral-300">/api/schemes</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-yellow-600 px-2 py-1 rounded text-xs">
                      PUT
                    </span>
                    <span className="text-neutral-300">/api/schemes/:id</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-midnight to-navy p-4 rounded-lg border border-white/10">
                <h4 className="font-medium text-white mb-2">
                  Certificate Services
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                      GET
                    </span>
                    <span className="text-neutral-300">/api/certificates</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-green-600 px-2 py-1 rounded text-xs">
                      POST
                    </span>
                    <span className="text-neutral-300">
                      /api/certificates/apply
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                      GET
                    </span>
                    <span className="text-neutral-300">
                      /api/certificates/status/:id
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-midnight to-navy p-4 rounded-lg border border-white/10">
                <h4 className="font-medium text-white mb-2">Admin Dashboard</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                      GET
                    </span>
                    <span className="text-neutral-300">/api/admin/users</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                      GET
                    </span>
                    <span className="text-neutral-300">
                      /api/admin/analytics
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-green-600 px-2 py-1 rounded text-xs">
                      POST
                    </span>
                    <span className="text-neutral-300">
                      /api/admin/services
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
                  <li>PostgreSQL database</li>
                  <li>npm or yarn package manager</li>
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
                      git clone &lt;repository-url&gt;
                    </code>
                    <code className="text-green-400 text-xs md:text-sm block">
                      cd government-services-platform
                    </code>
                  </div>

                  <div className="bg-gray-900 p-3 rounded-lg">
                    <p className="text-neutral-400 text-sm mb-1">
                      2. Install dependencies
                    </p>
                    <code className="text-green-400 text-sm">
                      npm run install:all
                    </code>
                  </div>

                  <div className="bg-gray-900 p-3 rounded-lg">
                    <p className="text-neutral-400 text-sm mb-1">
                      3. Set up environment variables
                    </p>
                    <code className="text-green-400 text-sm">
                      DATABASE_URL="postgresql://username:password@localhost:5432/government_services"
                    </code>
                    <br />
                    <code className="text-green-400 text-sm">
                      JWT_SECRET="your-jwt-secret-key"
                    </code>
                    <br />
                    <code className="text-green-400 text-sm">PORT=3001</code>
                  </div>

                  <div className="bg-gray-900 p-3 rounded-lg">
                    <p className="text-neutral-400 text-sm mb-1">
                      4. Set up the database
                    </p>
                    <code className="text-green-400 text-sm">
                      npm run db:generate
                    </code>
                    <br />
                    <code className="text-green-400 text-sm">
                      npm run db:push
                    </code>
                  </div>

                  <div className="bg-gray-900 p-3 rounded-lg">
                    <p className="text-neutral-400 text-sm mb-1">
                      5. Start development servers
                    </p>
                    <code className="text-green-400 text-sm">npm run dev</code>
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
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">
                  Backend Deployment
                </h4>
                <ul className="list-disc list-inside text-neutral-300 space-y-1">
                  <li>Upload backend/dist folder to your server</li>
                  <li>Install production dependencies</li>
                  <li>Set up process manager (PM2 recommended)</li>
                  <li>Configure production database</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">
                  Frontend Deployment
                </h4>
                <ul className="list-disc list-inside text-neutral-300 space-y-1">
                  <li>Upload frontend/dist folder to web server</li>
                  <li>Configure web server (Nginx/Apache)</li>
                  <li>Set up reverse proxy to backend API</li>
                  <li>Configure SSL certificates</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2">Database Schema</h4>
                <p className="text-neutral-300 mb-2">
                  Key entities in the PostgreSQL database:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-gradient-to-r from-midnight to-navy p-2 rounded border border-white/10">
                    <span className="text-cyan-400 text-sm">Admin</span>
                  </div>
                  <div className="bg-gradient-to-r from-midnight to-navy p-2 rounded border border-white/10">
                    <span className="text-cyan-400 text-sm">SchemeService</span>
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
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative w-[95vw] max-w-6xl h-[90vh] md:h-[85vh] border shadow-sm rounded-lg md:rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 overflow-hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={onClose}
          className="absolute p-2 rounded-sm top-3 right-3 md:top-5 md:right-5 bg-midnight hover:bg-gray-500 z-10"
        >
          <img src="assets/close.svg" className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* Mobile Header */}
          <div className="md:hidden bg-gradient-to-r from-midnight to-navy border-b border-white/10 p-4">
            <h2 className="text-lg font-bold text-white mb-3 pr-8">
              {blog.title}
            </h2>
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
          <div className="hidden md:block w-64 bg-gradient-to-b from-midnight to-navy border-r border-white/10 p-4">
            <h2 className="text-xl font-bold text-white mb-6 pr-8">
              {blog.title}
            </h2>
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

          {/* Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="p-4 md:p-6 h-full">
              <div className="min-h-full">{renderContent()}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPost;
