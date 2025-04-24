import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import Projects from './Components/Projects'
import About from './Components/About'
import Publications from './Components/Publications'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
      axios.get('/api/message')
          .then(res => setMessage(res.data.message))
          .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </Router>
  );
}

export default App;
