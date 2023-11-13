import { async } from "@firebase/util";
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { FirebaseAuth } from "../firebase/config";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";
// import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

// const router = createBrowserRouter([
//     {
//         path: '/auth/*',
//         element: <AuthRoutes />,
//         children: AuthRoutes,
//     },
//     {
//         path: '/',
//         element: <JournalRoutes />,
//         children: JournalRoutes,
//     },
//     {
//         path: '/*',
//         element: <Navigate to={'/'} />,
//     },
// ])

// export const AppRouter = () => {
//     const { status } = useSelector((state) => state.auth);
 
//     if (status === 'checking') {
//       return <CheckingAuth />;
//     }
   
//     return <RouterProvider router={router} />;
// }

export const AppRouter = () => {
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();


    // if(status === 'not-authenticated') {
    //     return <Navigate to={'/auth/login'} />
    // } 

    // return(
    //     <Outlet />
    // )

    useEffect(() => {
      onAuthStateChanged(FirebaseAuth, async(user) => {
        if(!user) return dispatch(logout());
        
        const { uid, email, displayName, photoURL } = user;
        dispatch(login({uid, email, displayName, photoURL}));
      })
    }, []);
    

    if(status === 'checking') {
        return [
            {
                path: "*",
                element: <CheckingAuth />
            }
        ];
    } else {
        return [
            {
                path: "/auth/*",    
                children: AuthRoutes
            },
            {
                path: "/",
                children: JournalRoutes
            }
        ];
    }    
}