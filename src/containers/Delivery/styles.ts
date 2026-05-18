import styled from 'styled-components'
import { Titulo } from '../../components/Product/styles'
import { cores } from '../../styles'

export const FormTitulo = styled(Titulo)`
  font-size: 16px;
  margin-bottom: 16px;
`

export const Rotulo = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Campo = styled.input`
  background-color: ${cores.rosaClaro};
  padding: 8px;
  border: none;
  color: ${cores.texto};
  font-weight: bold;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
`

export const FormItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`

export const FormGroup = styled.div`
  display: flex;
  gap: 34px;

  div {
    flex: 1;
  }
`

export const FormButton = styled(FormItem)`
  margin-top: 24px;
  margin-bottom: 0;
  gap: 8px;
`
