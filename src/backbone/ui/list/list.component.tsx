import React, { ReactElement } from "react"
import styled from "styled-components"

const ListContainer = styled.ul`
  margin-bottom: 0;
  padding-left: 0;
  list-style: none; // TODO: Safari BS
`

interface Properties<Item> {
  items?: Array<Item>
  renderItem: (item: Item) => ReactElement
  fallback?: ReactElement
}

export const List = <Item, _>({
  items = [],
  renderItem,
  fallback,
}: Properties<Item>): ReactElement | null => {
  if (items.length === 0) {
    if (fallback) {
      return fallback
    }
    // eslint-disable-next-line unicorn/no-null
    return null
  }
  return (
    <ListContainer>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ListContainer>
  )
}
