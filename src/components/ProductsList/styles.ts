import styled from 'styled-components'
import { Card } from '../Product/styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  margin-top: 32px;
  margin-bottom: 120px;

  ${Card} {
    margin-top: 48px;
  }
`
