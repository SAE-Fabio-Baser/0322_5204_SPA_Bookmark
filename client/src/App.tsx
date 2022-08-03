import React, { useRef, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  let handleCredentialResponse = console.log

  const loginButtonRef = useRef()

  useEffect(() => {
    if (!loginButtonRef) return

    // @ts-ignore
    window.google.accounts.id.initialize({
      client_id:
        '994628434629-8qgih8kafitts6bkqqntorv5t09n2o4b.apps.googleusercontent.com',
      callback: handleCredentialResponse,
    })

    // @ts-ignore
    window.google.accounts.id.renderButton(
      loginButtonRef.current,
      { theme: 'outline', size: 'large' } // customization attributes
    )
    // @ts-ignore
    window.google.accounts.id.prompt() // also display the One Tap dialog
  }, [loginButtonRef])

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Moin</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App