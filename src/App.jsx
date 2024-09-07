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
import Shop from './pages/Shop';
import ProductDetailsPage from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product_details" element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
