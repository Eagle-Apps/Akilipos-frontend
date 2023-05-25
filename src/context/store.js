import React, { createContext, useState } from 'react';
export const Store = createContext();
const StoreContext = ({ children }) => {
    let [user, setUser] = useState('');
    let [authUrl, setAuthUrl] = useState('https://akili-r28h.onrender.com');
    let [productUrl, setProductUrl] = useState('https://akili-product.onrender.com');
    let [employeeUrl, setEmployeeUrl] = useState('https://akili-employee.onrender.com');
    let [orderUrl, setOrderUrl] = useState('https://akili-order.onrender.com');
    let [vendorUrl, setVendorUrl] = useState('https://akili-vendor.onrender.com');
    let [customerUrl, setCustomerUrl] = useState('http://localhost:8005');
    let [messageUrl, setMessageUrl] = useState('https://akili-messaging.onrender.com');
    // let [vendorUrl, setVendorUrl] = useState('http://localhost:8008');
    // let [orderUrl, setOrderUrl] = useState('http://localhost:8002');

    let states = {
        userinfo: [user, setUser],
        auth: [authUrl, setAuthUrl],
        product: [productUrl, setProductUrl],
        employee: [employeeUrl, setEmployeeUrl],
        order: [orderUrl, setOrderUrl],
        vendor: [vendorUrl, setVendorUrl],
        customer: [customerUrl, setCustomerUrl],
        message: [messageUrl, setMessageUrl],
    };
    return <Store.Provider value={states}>{children}</Store.Provider>
}
export default StoreContext;