import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks";



export const AppRouter = () => {
    
    const status = useCheckAuth()

    if(status === 'checking') {
        return [
            {
                path: "*",
                element: <CheckingAuth />
            }
        ];
    } else {

        if(status === 'authenticated') {
            return [               
                {
                    path: "/",
                    children: JournalRoutes
                }
            ];
        } else {
            return [
                {
                    path: "/auth/*",      
                    children: AuthRoutes
                }
            ];            
        }
    }    

    
}