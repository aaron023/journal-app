import { Navigate, Routes, Route, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";
import { JournalPage } from '../pages/JournalPage'
import { Box, Toolbar } from '@mui/material';

// export const JournalRoutes = () => {
//     const {status} = useSelector(state => state.auth);

//     if(status === 'authentitcated') {
//         return <Navigate to='/auth/login' />
//     }

//     return (
//         <>
//           <Box sx={{ display: 'flex' }}>
//             {/* <NavbarDrawer  /> */}
     
//             <Box component={'main'} sx={{ flexGrow: 1, p: 3 }}>
//               <Toolbar />
     
//               <Outlet />
//             </Box>
//           </Box>
//         </>
//     );
// }

export const JournalRoutes = [
    {
        index: true,
        element: <JournalPage /> 
    },
    {
        path: "/*",
        element: <Navigate to={"/"} />
    }
];

// export const JournalRoutes = () => {
//   return (
//     <Routes>
//         <Route path='/' element={ <JournalPage /> } />
//         <Route path='/*' element={ <Navigate to="/" /> } />
//     </Routes>
//   )
// }
