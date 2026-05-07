import styled from 'styled-components'

import { cores } from '../../styles'

export const HeaderBar = styled.header`
  padding-top: 30px;
  padding-bottom: 65px;

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-weight: bold;
  }
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
