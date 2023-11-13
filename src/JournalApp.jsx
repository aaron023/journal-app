import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"

export const JournalApp = () => {
  console.log(AppRouter());
  const router = createBrowserRouter(AppRouter());

  return <RouterProvider router={router} />

  // return (
  //   // <AppTheme>
  //     <AppRouter />
  //   // </AppTheme>
  // )
}
