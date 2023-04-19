// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/navigation/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className=''>
      {/* <h1 className='text-red-500'>KAMOULOX</h1> */}
      <Navbar/>
      <main>
        <section>
          <Hero/>
        </section>
      </main>
      
    </div>
  );
}

export default App;
