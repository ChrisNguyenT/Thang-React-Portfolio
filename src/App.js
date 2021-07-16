import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <Footer></Footer>
    </div>
  );
}

export default App;
