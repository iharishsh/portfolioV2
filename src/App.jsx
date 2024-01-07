// App.jsx

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './sections/Home/Home';
import Skills from './sections/Skills/Skills';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  let sectionToShow;
  if (activeSection === 'home') {
    sectionToShow = <Home />;
  } else if (activeSection === 'skills') {
    sectionToShow = <Skills />;
  }

  return (
    <>
      <Navbar handleSectionChange={handleSectionChange} />
      {sectionToShow}
    </>
  );
}

export default App;
