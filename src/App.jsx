import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import './App.css'
import Patners from './components/Patners/Patners';
import Residencies from './components/Residencies/Residencies';
import Value from './components/value/Value';
import Contact from './components/Contact/Contact';
import Invite from './components/Invite/Invite';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <Patners/>
      <Residencies/>
      <Value/>
      <Contact/>
      <Invite/>
      <Footer/>
    </div>
  );
}

export default App;
