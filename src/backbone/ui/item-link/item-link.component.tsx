import styled from "styled-components"

export const ItemLink = styled.a`
  --point-radius: 1rem;

  position: relative;
  display: block;
  padding: 1rem 1rem 1rem calc(var(--point-radius) * 3);
  background: white;
  border-radius: 4px;
  color: var(--black-300);
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    background: var(--yellow-700);
    color: white;
  }

  @media (prefers-color-scheme: dark) {
    background: var(--black-300);
    color: var(--yellow-700);

    &:hover,
    &:active,
    &:focus {
      background: var(--yellow-700);
      color: white;
    }
  }

  &:before {
    position: absolute;
    top: calc(50% - (var(--point-radius) / 2));
    left: var(--point-radius);
    width: var(--point-radius);
    height: var(--point-radius);
    background: var(--red-100);
    border-radius: 50%;
    content: "";
  }
`
