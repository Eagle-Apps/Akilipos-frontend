import React, { createContext, useState } from 'react';
export const Store = createContext();
const StoreContext = ({ children }) => {
    let [user, setUser] = useState('');
    let [url, setUrl] = useState('');

    let states = {
        userinfo: [user, setUser],
        endUrl: [url, setUrl]
    };
    return <Store.Provider value={states}>{children}</Store.Provider>
}
export default StoreContext;