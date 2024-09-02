// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './pages/Homepage';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import SignUp from './pages/auth/SignUp';
import MyAccount from './pages/Myaccount';
import './App.css';
import Login from './pages/auth/Login';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar is included at the top for consistent navigation */}
        {/* Define routes for each page */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myaccount" element={<MyAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
