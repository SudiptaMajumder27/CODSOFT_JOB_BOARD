/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext , useState} from 'react'
import { useContext } from 'react';

export const AuthJobpost = createContext()
export default function JobPost({children}) {
    const initialAuthUser = localStorage.getItem("Users");
    const [authUser, setAuthUser]= useState(
        initialAuthUser? JSON.parse(initialAuthUser) : undefined
    );
    return(
        <AuthJobpost.Provider value ={[authUser, setAuthUser]}>
            {children}
        </AuthJobpost.Provider>
    );
 
}
export const useAuth = () => useContext(AuthJobpost);
