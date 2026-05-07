import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  color: ${cores.rosa};
  font-weight: bold;
  font-size: 14px;
  background-color: ${cores.rosaClaro};
  padding: 4px 6px;
  border: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  color: ${cores.rosaClaro};
  font-weight: bold;
  font-size: 14px;
  background-color: ${cores.rosa};
  padding: 4px 6px;
  cursor: pointer;
  text-decoration: none;
`
