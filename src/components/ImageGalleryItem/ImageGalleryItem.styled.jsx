import styled from '@emotion/styled'

export const ListItem = styled.li`
 border-radius: 2px;
    :hover {
  transform: scale(1.03);
  cursor: zoom-in;
  box-shadow: rgba(168, 180, 159) 0px 22px 70px 4px;
}
`
export const Image = styled.img`
 width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`
