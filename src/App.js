import React from 'react';
import Home from './pages/Home';
import SingleVideo from './components/singleVideoPlayer/SingleVideo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/videos/:videoId" element={<SingleVideo />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
