import Projects from './components/Projects';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import { Features } from './components/features/Features';

const App = () => {
  return (
    <div className="w-full bg-bodyColor h-auto text-lightText">
      <div className="max-w-screen-2xl  mx-auto px-16">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
      </div>
    </div>
  );
};

export default App;
