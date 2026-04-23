import { Imagem, Titulo } from './styles'

import bannerImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <img src={logo} alt="Logo" />
      <Titulo>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Titulo>
    </div>
  </Imagem>
)

export default Hero
