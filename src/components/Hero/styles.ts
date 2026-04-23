import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 385px;
  background-size: cover;
  background-repeat: no-repeat;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      margin-top: 58px;
    }
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-top: 139px;
  text-align: center;
`
