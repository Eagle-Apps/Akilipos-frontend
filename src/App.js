import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreContext from './context/store';
import "./style.css";
import "./assets/css/forgotPassword.css";
import "./assets/css/faq.css";
import "./assets/css/customers.css";
import "./assets/css/navbar.css";
import "./assets/css/nav.css";
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
import Protected from './components/Protected';
import { useCookies } from 'react-cookie';
import { useParams } from "react-router-dom";
import ShopList from './pages/Shoplist';
import Credit from './pages/CreditBook';
import Payment from './pages/Payment';
import ItemsOnDemand from './pages/ItemsOnDemand';
import Profile from './pages/Profile';
import Order from './pages/Order';
import SingleOrder from './pages/SingleOrder';
import Analysis from './pages/Report';

function App() {
  let { id } = useParams();
  const [cookies, setCookie] = useCookies(['akili', 'akiliAdmin']);
  let isLoggedIn = true;
  let isAdmin = true;
  // console.log(id)
  // cookies.akili !== null ? isLoggedIn = true : isLoggedIn = false;
  // cookies.akiliAdmin ? isAdmin = true : isAdmin = false;
  console.log(id)

  return (
    <CookiesProvider>
      <StoreContext>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard/:id" element={<Protected id={id} isLoggedIn={isLoggedIn} isAdmin={isAdmin}><Dashboard /></Protected>} />
            {/* <Route path="/sample" element={<Sample />} /> */}
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inventory/:id" element={<Protected id={id} isLoggedIn={isLoggedIn} isAdmin={isAdmin}><Catalog /></Protected>} />
            <Route path="/reset-password" element={<Protected id={id} isLoggedIn={isLoggedIn} isAdmin={isAdmin}><ResetPassword /></Protected>} />
            <Route path="/help/:id" element={<Protected id={id} isLoggedIn={isLoggedIn} isAdmin={isAdmin}><HelpCenter /></Protected>} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/customers/:id" element={<Customers />} />
            <Route path="/customers-view/:id" element={<CustomersTable />} />
            {/* <Route path="/customers-view/:id" element={<Protected id={id} isLoggedIn={isLoggedIn} isAdmin={isAdmin}><CustomersTable /></Protected>} /> */}
            <Route path="/settings/:id" element={<Protected id={id} isLoggedIn={isLoggedIn} isAdmin={isAdmin}><Settings /></Protected>} />
            <Route path="/prices" element={<Price />} />
            <Route path="/employees/:id" element={<Protected id={id} isLoggedIn={isLoggedIn} isAdmin={isAdmin}><Employess /></Protected>} />
            <Route path="/suppliers/:id" element={<Protected id={id} isLoggedIn={isLoggedIn} isAdmin={isAdmin}><Vendors /></Protected>} />
            <Route path="/sales/:id" element={<Sales />} />
            <Route path="/shopping-list/:id" element={<ShopList />} />
            <Route path="/credit/:id" element={<Credit />} />
            <Route path="/payments/:id" element={<Payment />} />
            <Route path="/orders/:id" element={<Order />} />
            <Route path="/order/:id" element={<SingleOrder />} />
            <Route path="/in-demand/:id" element={<ItemsOnDemand />} />
            <Route path="/profile/:id1/:id" element={<Profile />} />
            <Route path="/chart/:id" element={<BarChart />} />
            <Route path="/charts/:id" element={<LineGraph />} />
            <Route path="/reports/:id" element={<Analysis />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </StoreContext >
    </CookiesProvider>
  );
}

export default App;
