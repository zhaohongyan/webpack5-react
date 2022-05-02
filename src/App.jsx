import React, { useEffect } from 'react';
import { Routes, Route, Link } from './react-router-dom.index.js'
import './App.css';

import Home from './Home'
import About from './About'
import Page from './Page'

function App() {
  useEffect(() => {
    console.log('app', navigator.userAgent)
  })

  return (
    <>
      <div>
        link跳转：
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/page">page</Link>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/page" element={<Page />} />
      </Routes>
    </>
  );
}

export default App;
