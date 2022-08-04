import React from 'react'
import { Grid, Label, List, Menu, Image } from 'semantic-ui-react'
import ListItem from '../Components/ListItem'

interface Props {}

function Home(props: Props): JSX.Element {
  return (
    <Grid>
      <Grid.Column width={4}>
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
      </Grid.Column>

      <Grid.Column width={8}>
        <List>
          <ListItem
            id={'1'}
            title={'How to sharpen a chainsaw'}
            summary={'steht doch da'}
            url={'http://youtube.com/watch/wehhfiwef'}
            createdAt={Date.now()}
            thumbnailUrl={'https://picsum.photos/300/200'}
            tags={['video', 'camping']}
          />
        </List>
      </Grid.Column>

      <Grid.Column width={4}></Grid.Column>
    </Grid>
  )
}

export default Home