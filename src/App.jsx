import Projects from './components/projects/Projects';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import { Features } from './components/features/Features';
import Resume from './components/resume/Resume';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div className="w-full bg-bodyColor h-auto text-lightText p-4">
      <Navbar />
      <div className="max-w-screen-2xl  mx-auto px-16">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
