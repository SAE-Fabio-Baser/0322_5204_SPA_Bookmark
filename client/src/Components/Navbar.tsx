import React, { MouseEvent } from 'react'
import { Icon, Input, Menu, MenuItemProps, Modal } from 'semantic-ui-react'
import routes from '../lib/routes'
import { Link, useLocation } from 'react-router-dom'
import useStore from '../lib/store'
import LoginModal from './LoginModal'

interface Props {}

function Navbar(props: Props): JSX.Element {
  const loginModalOpen = useStore(state => state.loginModalOpen)
  const setLoginModalOpen = useStore(state => state.setLoginModalOpen)

  const activeItem = 'home'

  function Item({ navText, path }: RouteInfo) {
    const { pathname } = useLocation()
    const active = pathname === path

    return (
      <Menu.Item
        as={Link}
        to={path}
        key={path}
        name={navText}
        active={active}
      ></Menu.Item>
    )
  }

  function handleItemClick(event: React.MouseEvent, data: MenuItemProps) {
    //
  }

  return (
    <Menu secondary>
      {routes.map(Item)}
      <Menu.Menu position='right'>
        <Menu.Item onClick={() => setLoginModalOpen()}>
          <Icon name={'user circle'} size={'large'} />
        </Menu.Item>
      </Menu.Menu>
      <LoginModal />
    </Menu>
  )
}

export default Navbar