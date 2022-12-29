import React from 'react';

import { Brand, Cta, Navbar } from "./components";
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./containers";
import { SearchTree } from "./components"
import "./App.css";


function App() {
  return (
    <div>
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
    <div className="practicingSearchTree">
      <SearchTree />
    </div>
    </div>
  );
}

export default App;
