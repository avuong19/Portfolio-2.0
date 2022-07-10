import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';
import Project from './components/Project';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {

  return (
    <div >
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
