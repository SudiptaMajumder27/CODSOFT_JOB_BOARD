// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import React, { createContext , useState} from 'react'
// import { useContext } from 'react';

// export const AuthContact = createContext()
// export default function Contact({children}) {
//     const initialAuthUser = localStorage.getItem("User");
//     const [authUser, setAuthUser]= useState(
//         initialAuthUser? JSON.parse(initialAuthUser) : undefined
//     );
//     return(
//         <AuthContact.Provider value ={[authUser, setAuthUser]}>
//             {children}
//         </AuthContact.Provider>
//     );
 
// }
// export const useAuth1 = () => useContext(AuthContact);
