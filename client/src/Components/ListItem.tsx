import React from 'react'
import { Image, Label, List } from 'semantic-ui-react'

interface Props {
  id: string
  title: string
  summary: string
  url: string
  createdAt: number
  thumbnailUrl: string
  tags: string[]
}

function ListItem(props: Props): JSX.Element {
  const { id, title, summary, url, createdAt, thumbnailUrl, tags } = props

  const formattedUrl = new URL(url).hostname
  const formattedDate = new Date(createdAt).toLocaleDateString('de')

  return (
    <List.Item style={{ display: 'flex' }} key={id}>
      <Image src={thumbnailUrl} style={{ height: '7rem' }} />
      <div>
        <h4>{title}</h4>
        <p>{summary}</p>
        <div>
          {formattedUrl} • {formattedDate} •
          {tags.map(tag => (
            <Label basic size={'tiny'} key={tag}>
              {tag}
            </Label>
          ))}
        </div>
      </div>
    </List.Item>
  )
}

export default ListItem