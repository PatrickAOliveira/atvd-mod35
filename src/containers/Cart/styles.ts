import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../../components/Button/styles'

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  div {
    display: flex;
    flex-direction: column;
  }

  a {
    display: block;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const ImgItem = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 8px;
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.rosaClaro};
  font-weight: bold;
  font-size: 14px;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const CartContainer = styled.div`
  ${ButtonContainer} {
    width: 100%;
  }
`
