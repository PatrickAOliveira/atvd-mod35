import { Link } from 'react-router-dom'
import { HeaderBar, Links } from './styles'

import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/fundo.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <nav>
        <Links>
          <li>
            <a href="#">Restaurantes</a>
          </li>
          <li>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </li>
          <li>
            <a href="#">0 - produto(s) no carrinho</a>
          </li>
        </Links>
      </nav>
    </div>
  </HeaderBar>
)

export default Header
