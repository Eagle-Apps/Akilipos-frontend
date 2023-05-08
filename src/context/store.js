import React, { createContext, useState } from 'react';
export const Store = createContext();
const StoreContext = ({ children }) => {
    let [user, setUser] = useState('');
    let [authUrl, setAuthUrl] = useState('https://akili-r28h.onrender.com');
    let [productUrl, setProductUrl] = useState('https://akili-product.onrender.com');
    let [employeeUrl, setEmployeeUrl] = useState('https://akili-employee.onrender.com');

    let states = {
        userinfo: [user, setUser],
        auth: [authUrl, setAuthUrl],
        product: [productUrl, setProductUrl],
        employee: [employeeUrl, setEmployeeUrl]
    };
    return <Store.Provider value={states}>{children}</Store.Provider>
}
export default StoreContext;