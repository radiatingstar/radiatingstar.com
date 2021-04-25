import React, { ReactElement, VoidFunctionComponent } from "react"
import styled from "styled-components"
import { Stylable } from "../../types/stylable.type"

interface Properties<Item> {
  items?: Array<Item>
  renderItem: (item: Item, itemProperties: { last: boolean }) => ReactElement
  fallback?: ReactElement
}

type StylableProperties<Item> = Stylable<Properties<Item>>

/**
 * Use this type as a generic argument whenever you need to create a stylable list.
 *
 * @example
 * const StyledList = styled(List)
 * <StyledList<ListComponentProperties<YourItem>> ... />
 */
export type ListComponentProperties<Item> = VoidFunctionComponent<
  StylableProperties<Item>
>

/**
 * Generic list component to handle the list shenanigans.
 *
 * @example
 * <List
 *   items={[{name: "React"}, {name: "Angular"}]}
 *   renderItem={item => <span>{item.name}</span>}
 *   fallback={<div>Nothing to display!</div>}
 * />
 *
 * @param items The list you want to render.
 * @param renderItem Item renderer. Key is handled internally.
 * @param fallback Optionally add a fallback when there's no elements.
 * @param className It's stylable.
 */
export const List: <Item>(
  p: StylableProperties<Item>
) => ReactElement<StylableProperties<Item>> | null = ({
  items = [],
  renderItem,
  fallback,
  className,
}) => {
  if (items.length === 0) {
    if (fallback) {
      return fallback
    }
    // eslint-disable-next-line unicorn/no-null
    return null
  }
  return (
    <ListContainer className={className}>
      {items.map((item, index) => (
        <li key={index}>
          {renderItem(item, { last: index === items?.length - 1 })}
        </li>
      ))}
    </ListContainer>
  )
}

const ListContainer = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style: none; /* TODO: Safari BS. */
`
