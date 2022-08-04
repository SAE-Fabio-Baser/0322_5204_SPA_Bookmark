import React, { useRef, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar'
import routes from './lib/routes'

const App = () => {
  let handleCredentialResponse = console.log

  const loginButtonRef = useRef()

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map(({ element, path }) => (
            <Route key={path} path={path} element={element}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App