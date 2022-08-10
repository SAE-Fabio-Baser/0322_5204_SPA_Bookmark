import React from 'react'
import { Grid, Label, List, Menu, Image } from 'semantic-ui-react'
import ListItem from '../Components/ListItem'
import ListSidebar from '../Components/ListSidebar'

interface Props {}

function Home(props: Props): JSX.Element {
  return (
    <Grid>
      <Grid.Column width={4}>
        <ListSidebar />
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