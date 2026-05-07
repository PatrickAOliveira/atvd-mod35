import { Container, FooterText, SocialList } from './styles'

import logo from '../../assets/images/logo.png'
import twitter from '../../assets/images/twitter.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'

const Footer = () => (
  <Container>
    <div className="container">
      <img src={logo} alt="Efood" />
      <SocialList>
        <li>
          <img src={instagram} alt="Instagram" />
        </li>
        <li>
          <img src={facebook} alt="Facebook" />
        </li>
        <li>
          <img src={twitter} alt="Twiiter" />
        </li>
      </SocialList>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br /> dos produtos é toda do estabelecimento contratado.
      </FooterText>
    </div>
  </Container>
)

export default Footer
