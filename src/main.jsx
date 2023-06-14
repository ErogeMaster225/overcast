import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Forecast from './components/Forecast.jsx'
import './index.css'
import store from './stores/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Forecast />}></Route>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
