import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home'
import Projects from './Components/Projects'

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
      </Routes>
    </Router>
  );
}

export default App;
