import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreContext from './context/store';
import "./style.css";
import "./assets/css/forgotPassword.css";
import "./assets/css/faq.css";
import "./assets/css/customers.css";
import "./assets/css/navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sample from './pages/sample';
import Home from './pages/Home';
import NotFound from './pages/notFound';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Catalog from './pages/Product';
import ResetPassword from './pages/ResetPassword';
import HelpCenter from './pages/Help';
import Faq from './pages/Faq';
import Suppliers from './pages/Suppliers';
import Customers from './pages/Customers';
import CustomersTable from './pages/CustomerTable';
import Settings from './pages/Settings';
import Price from './pages/Pricing';

function App() {
  return (
    <StoreContext>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Catalog />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers-view" element={<CustomersTable />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/prices" element={<Price />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </StoreContext >
  );
}

export default App;
