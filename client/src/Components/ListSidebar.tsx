import React from 'react'
import { Menu, Label } from 'semantic-ui-react'

interface Props {}

function ListSidebar() {
  return (
    <Menu vertical fluid>
      <Menu.Item name='inbox'>
        <Label>13</Label>
        Inbox
      </Menu.Item>
      <Menu.Item name='collections'>
        Collections
        <Menu.Menu>
          <Menu.Item name='collection-favourites'>
            <Label>2</Label>
            Favourites
          </Menu.Item>
          <Menu.Item name='collection-webdev'>
            <Label>4</Label>
            Webdev Stuff
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item name='tags'>
        Tags
        <Menu.Menu>
          <Menu.Item name='tag-article'>
            <Label>2</Label>
            Articles
          </Menu.Item>
          <Menu.Item name='tag-video'>
            <Label>4</Label>
            Videos
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item name='trash'>
        <Label>2</Label>
        Trash
      </Menu.Item>
    </Menu>
  )
}

export default ListSidebar
