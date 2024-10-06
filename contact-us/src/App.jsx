import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import NavBar from './components/Header';
import Blog from './components/Blog';
import Footer from './components/Footer'; // renamed to Footer for clarity

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          {/* Define the routes */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
