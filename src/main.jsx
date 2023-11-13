import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { JournalApp } from './JournalApp'
import { AppRouter } from './router/AppRouter'
import { store } from './store'
import './styles.css'
import { AppTheme } from './theme/AppTheme'

//const router = createBrowserRouter(AppRouter);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <JournalApp />
        {/* <RouterProvider router={ router } /> */}
      </AppTheme>  
    </Provider>
  </React.StrictMode>,
)
