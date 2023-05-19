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
import Employess from './pages/Employees';
import { CookiesProvider } from 'react-cookie';
import Vendors from './pages/Vendors';
import Sales from './pages/Sales';

function App() {
  return (
    <CookiesProvider>
      <StoreContext>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard/:id" element={<Dashboard />} />
            <Route path="/sample" element={<Sample />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/:id" element={<Catalog />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/help/:id" element={<HelpCenter />} />
            <Route path="/faq/:id" element={<Faq />} />
            {/* <Route path="/suppliers/:id" element={<Suppliers />} /> */}
            <Route path="/customers/:id" element={<Customers />} />
            <Route path="/customers-view/:id" element={<CustomersTable />} />
            <Route path="/settings/:id" element={<Settings />} />
            <Route path="/prices" element={<Price />} />
            <Route path="/employees/:id" element={<Employess />} />
            <Route path="/suppliers/:id" element={<Vendors />} />
            <Route path="/sales/:id" element={<Sales />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </StoreContext >
    </CookiesProvider>
  );
}

export default App;
