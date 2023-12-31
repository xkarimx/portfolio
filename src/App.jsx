import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
