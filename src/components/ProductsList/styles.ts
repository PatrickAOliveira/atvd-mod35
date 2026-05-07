import styled from 'styled-components'
import { Card } from '../Product/styles'

import { Props } from '.'

export const List = styled.ul<Omit<Props, 'itens'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.type === 'restaurante' ? 'repeat(2,1fr)' : 'repeat(3,1fr)'};
  column-gap: ${(props) => (props.type === 'restaurante' ? '80px' : '32px')};
  margin-top: 32px;
  margin-bottom: 120px;

  ${Card} {
    margin-top: 48px;
  }
`
