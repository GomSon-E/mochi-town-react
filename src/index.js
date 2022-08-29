import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Aside from './Components/Aside';
import Footer from './Components/Footer';

import Shop from './Pages/Shop';
import Review from './Pages/Review';

import './css/index.css'

function App({children}) {
  return (
    <div id='wrap'>
      <Header />      
      <main>
        {children}
      </main>
      <Aside />
      <Footer />
    </div>
  )
}

function Main() {
  return (
    <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </App>
    </BrowserRouter>
  )
}

// Export
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

