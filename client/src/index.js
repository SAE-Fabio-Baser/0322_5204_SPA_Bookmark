import React, { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector('#app'))

const App = () => {
  let handleCredentialResponse = console.log

  const loginButtonRef = useRef()

  useEffect(() => {
    if (!loginButtonRef) return

    window.google.accounts.id.initialize({
      client_id:
        '994628434629-8qgih8kafitts6bkqqntorv5t09n2o4b.apps.googleusercontent.com',
      callback: handleCredentialResponse,
    })
    window.google.accounts.id.renderButton(
      loginButtonRef.current,
      { theme: 'outline', size: 'large' } // customization attributes
    )
    window.google.accounts.id.prompt() // also display the One Tap dialog
  }, [loginButtonRef])

  return (
    <div>
      <div id='buttonDiv' ref={loginButtonRef}></div>
      <h1>Moin</h1>
    </div>
  )
}

root.render(<App />)