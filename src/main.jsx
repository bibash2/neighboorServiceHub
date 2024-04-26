import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { YourPost, YourWork, Home, Work, ServiceProvider, Register, Login,ServicePost, ServiceProviderDetail } from './Components'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import {store} from './Store/store.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="servicePost" element={<ServicePost />} />

        <Route path="serviceProviders" element={<ServiceProvider />} />
        <Route path="yourPost" element={<YourPost />} />
        <Route path="yourWork" element={<YourWork />} />
        <Route path="Work" element={<Work />} />
        <Route path='serviceProviders/:serviceProviderId' element={<ServiceProviderDetail/>}/>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>

  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
