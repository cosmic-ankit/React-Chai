import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    //Creating the data over here that we gonna send
    const [user, setUser] = useState({ username: '' });
    //Creating  a object here in user
    const [password, setPassword] = useState({ passCode: '' });
    //Creating a object inside password

    return ( 
        //Here children acts as a layout and passing the data using value
        <UserContext.Provider value={{ user, setUser, password, setPassword }}>  {/* Sending them in object */}
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
