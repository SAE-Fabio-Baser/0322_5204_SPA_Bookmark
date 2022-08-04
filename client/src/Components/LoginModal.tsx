import React, { useEffect, useRef, useState } from 'react'
import { Modal } from 'semantic-ui-react'
import useStore from '../lib/store'

interface Props {}

function LoginModal(props: Props): JSX.Element {
  const loginModalOpen = useStore(state => state.loginModalOpen)
  const setLoginModalOpen = useStore(state => state.setLoginModalOpen)

  const loginButtonRef = useRef<null | HTMLDivElement>(null)

  function handleOnOpen() {
    console.log(loginButtonRef.current?.childNodes.length)

    // @ts-ignore
    window.google.accounts.id.initialize({
      client_id:
        '994628434629-8qgih8kafitts6bkqqntorv5t09n2o4b.apps.googleusercontent.com',
      callback: () => {
        setLoginModalOpen(false)
      },
    })

    // @ts-ignore
    window.google.accounts.id.renderButton(
      loginButtonRef.current,
      { theme: 'outline', size: 'large' } // customization attributes
    )
    // @ts-ignore
    window.google.accounts.id.prompt() // also display the One Tap dialog
  }

  return (
    <Modal
      onMount={handleOnOpen}
      onClose={() => setLoginModalOpen(false)}
      open={loginModalOpen}
      header='Sign in'
      content={
        <div>
          <div ref={loginButtonRef} />
        </div>
      }
    />
  )
}

export default LoginModal