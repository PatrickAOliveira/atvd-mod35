import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosaClaro};
  padding: 40px 0;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const SocialList = styled.ul`
  display: flex;
  margin-top: 33px;
  gap: 8px;
`

export const FooterText = styled.p`
  font-size: 10px;
  text-align: center;
  margin-top: 80px;
`
