import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import NewsletterToast from "./components/NewsletterToast";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <NewsletterToast />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experiences />
        </div>
      </div>
      <Testimonial />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
