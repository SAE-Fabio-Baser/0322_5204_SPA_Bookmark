import React from 'react'
import Home from '../Views/Home'

const routes: RouteInfo[] = [
  {
    path: '*',
    element: <h1>404 — Not found</h1>,
  },
  {
    path: '/',
    element: <Home />,
    navText: 'Home',
    showInNav: true,
  },
  {
    path: '/settings',
    icon: 'cog',
    element: <h1>settings</h1>,
    navText: 'Settings',
    showInNav: true,
  },
]

export default routes