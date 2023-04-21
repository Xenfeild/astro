// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/navigation/Navbar';
import Hero from './components/Hero';
import SectionFeatures from './components/SectionFeatures';
import SectionInside from './components/SectionInside';
import SectionComponents from './components/SectionComponents';
import SectionBlog from './components/SectionBlog';
import SectionFaq from './components/SectionFaq';
import FooterTop from './components/FooterTop';
import FooterBottom from './components/FooterBottom';
import SectionFeaturesCorrection from './components/SectionFeaturesCorrection';
import SectionInsideCorrection from './components/SectionInsideCorrection';
import SectionComponentsCorrection from './components/SectionComponentsCorrection';
import SectionSteps from './components/navigation/SectionSteps';


function App() {
  return (
    <div className=''>
      {/* <h1 className='text-red-500'>KAMOULOX</h1> */}
      <Navbar/>
      <Hero/>
      <main>
        <section>
          {/* <SectionFeatures/> */}
          <SectionFeaturesCorrection/>
        </section>
        <section>
          {/* <SectionInside/> */}
          <SectionInsideCorrection/>
          <SectionSteps/>
        </section>
        <section>
          <SectionComponents/>
          <SectionComponentsCorrection/>
        </section>
        <section>
          <SectionBlog/>
        </section>
        <section>
          <SectionFaq/>
        </section>
      </main>
      <footer>
        <FooterTop/>
        <FooterBottom/>
      </footer>
      
    </div>
  );
}

export default App;
