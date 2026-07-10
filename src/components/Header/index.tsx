import { Link } from 'react-router-dom'
import { HeaderBar, Links } from './styles'

import logo from '../../assets/images/logo.png'
import bannerImg from '../../assets/images/fundo.png'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
              <a onClick={openCart}>{items.length} - produto(s) no carrinho</a>
            </li>
          </Links>
        </nav>
      </div>
    </HeaderBar>
  )
}

export default Header
