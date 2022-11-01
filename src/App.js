import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css';
import { BackTop } from 'antd';
import { Landing, Gallery, NoPage, Layout} from './pages';


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Landing/>} />
          <Route path="/gallery"  element={<Gallery/>} />
          <Route path="/*"  element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>

    <BackTop />

    </div>
  ) 
}

export default App 
