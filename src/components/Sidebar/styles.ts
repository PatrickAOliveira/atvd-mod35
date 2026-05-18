import styled from 'styled-components'
import { cores } from '../../styles'
import { Overlay } from '../Modal/styles'

export const SidebarContainer = styled(Overlay)`
  z-index: 10;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: normal;
  right: auto;
  bottom: auto;
  background-color: transparent;
`

export const SideBar = styled.aside`
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  width: 360px;
  height: 100%;
  position: relative;
  z-index: 11;
  padding: 32px 8px;
`

export const SideOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`
