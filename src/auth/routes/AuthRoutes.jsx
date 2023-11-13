import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { useSelector } from "react-redux";
import { LoginPage, RegisterPage } from '../pages'

// export const AuthRoutes = () => {
//     const {status} = useSelector(state => state.auth);

//     if(status === 'authenticated') {
//         return <Navigate to={'/'} />
//     }

//     return (
//         <>
//             <Outlet />
//         </>
//     )
// }

export const AuthRoutes = [
    {
        index: true,
        path: "login",
        element: <LoginPage />
    },
    {
        path: "register",
        element: <RegisterPage />
    },
    {
        path: "*",
        element: <Navigate to={"/auth/login"} />,
    },
];

// export const AuthRoutes = () => {
//   return (
//     <Routes>
//         <Route path='login' element={ <LoginPage /> } />
//         <Route path='register' element={ <RegisterPage /> } />
//         <Route path='/*' element={ <Navigate to="/auth/login" /> } />
//     </Routes>
//   )
// }
