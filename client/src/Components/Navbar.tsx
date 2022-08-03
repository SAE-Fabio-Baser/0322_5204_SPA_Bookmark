import React from 'react'
import { Input, Menu, MenuItemProps } from 'semantic-ui-react'

interface Props {}

function Navbar(props: Props): JSX.Element {
  const activeItem = 'home'

  function Item() {
    return (
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />
    )
  }

  function handleItemClick(event: React.MouseEvent, data: MenuItemProps) {
    //
  }

  return (
    <Menu secondary>
      <Item />
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar