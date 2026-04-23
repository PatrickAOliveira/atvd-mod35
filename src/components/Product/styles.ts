import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  color: ${cores.rosa};
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const CardDetails = styled.div`
  border-left: 1px solid ${cores.rosa};
  border-right: 1px solid ${cores.rosa};
  border-bottom: 1px solid ${cores.rosa};
  padding: 8px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
  }
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Nota = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`
