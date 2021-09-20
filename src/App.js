import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer'
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Resume from './components/Resume';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <About></About>
      <Projects></Projects>
      <Resume></Resume>
      <Footer></Footer>
    </div>
  );
}

export default App;
