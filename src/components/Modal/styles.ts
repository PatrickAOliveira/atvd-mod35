import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const Overlay = styled.div<Omit<Props, 'item'>>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  transition: all ease 0.5s;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  display: ${(props) => (props.isOpen === false ? 'none' : 'flex')};
`

export const ModalBox = styled.div`
  display: flex;
  width: 1024px;
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  padding: 32px;

  div {
    margin-left: 24px;
  }
`
