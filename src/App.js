// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/navigation/Navbar';
import Hero from './components/Hero';
import SectionFeatures from './components/navigation/SectionFeatures';

function App() {
  return (
    <div className=''>
      {/* <h1 className='text-red-500'>KAMOULOX</h1> */}
      <Navbar/>
      <Hero/>
      <main>
        <section>
          <SectionFeatures/>
        </section>
      </main>
      
    </div>
  );
}

export default App;
