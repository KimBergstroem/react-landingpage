import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Signup from './components/Signup/Signup';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      
      <>
        <Navbar/>
        <Hero/>
        <Signup/>
        <Footer/>
      </>

    </div>
  );
}

export default App;
