import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                Hi, I'm <span className="text-indigo-600">Udai Das</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8">
                Full Stack Web Developer
              </p>
              <p className="text-lg text-gray-600 mb-12">
                I build modern web applications with cutting-edge technologies.
                Passionate about creating beautiful, user-friendly experiences.
              </p>
              <div className="flex gap-4">
                <a
                  href="#projects"
                  className="px-8 py-3 text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 text-base font-medium rounded-lg text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
              <Image
                src="/code-bg.jpg"
                alt="Programming background"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-indigo-500/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600">
            <p className="mb-6">
              I'm a passionate web developer with expertise in modern web technologies.
              With a strong foundation in both frontend and backend development,
              I create seamless, responsive web applications that deliver exceptional user experiences.
            </p>
            <p>
              My journey in web development started from ICFAI University as a Computer Science Engineer. Since then,
              I've worked on various projects, constantly learning and adapting to
              new technologies and best practices in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            My Projects
          </h2>
          <Projects />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Skills & Technologies
          </h2>
          <Skills />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#111827]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
            Get In Touch
          </h2>
          <Contact />
        </div>
      </section>
    </main>
  );
}
