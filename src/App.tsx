import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
