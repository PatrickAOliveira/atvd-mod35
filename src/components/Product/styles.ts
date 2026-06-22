import styled from 'styled-components'

import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Props } from '.'

export const Card = styled.div<Omit<Props, 'item' | 'onOpenModal'>>`
  color: ${(props) =>
    props.type === 'cardapio' ? cores.rosaClaro : cores.rosa};
  background-color: ${(props) => (props.type === 'cardapio' ? cores.rosa : '')};
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${(props) => (props.type === 'cardapio' ? '8px' : 0)};

  ${TagContainer} {
    margin-right: 8px;
  }

  div {
    padding-top: ${(props) => (props.type === 'cardapio' ? '8px' : 'auto')};
  }

  > img {
    max-width: 472px;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
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
  background-color: #fff;
  padding: 8px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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
  margin-bottom: 16px;
  text-align: start;
`
