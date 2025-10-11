// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */

// import React, { createContext , useState} from 'react'
// import { useContext } from 'react';

// export const AuthJobApply = createContext()
// export default function JobApply({children}) {
//     const initialAuthUser = localStorage.getItem("Users");
//     const [authUser, setAuthUser]= useState(
//         initialAuthUser? JSON.parse(initialAuthUser) : undefined
//     );
//     return(
//         <AuthJobApply.Provider value ={[authUser, setAuthUser]}>
//             {children}
//         </AuthJobApply.Provider>
//     );
 
// }
// export const useAuth = () => useContext(AuthJobApply);
