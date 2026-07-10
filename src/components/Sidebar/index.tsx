import { useDispatch, useSelector } from 'react-redux'
import { SideBar, SidebarContainer, SideOverlay } from './styles'
import Cart from '../../containers/Cart'
import Delivery from '../../containers/Delivery'
import Payment from '../../containers/Payment'
import Finish from '../../containers/Finish'
import { formataPreco } from '../Modal'
import { RootReducer } from '../../store'
import { close, setContainer } from '../../store/reducers/cart'

export type Container = 'cart' | 'delivery' | 'payment' | 'finish'

const Sidebar = () => {
  const { isOpen, items, step } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()
  const subtotal = items.reduce((acc, curr) => acc + curr.preco, 0)

  const handleClose = () => {
    dispatch(close())
    setTimeout(() => dispatch(setContainer('cart')), 300)
  }

  return (
    <SidebarContainer className={isOpen ? 'is-open' : ''}>
      <SideOverlay onClick={handleClose} />
      <SideBar onClick={(e) => e.stopPropagation()}>
        {step === 'cart' && (
          <>
            {items.length > 0 ? (
              <Cart nextStep={() => dispatch(setContainer('delivery'))} />
            ) : (
              <p>O carrinho está vazio</p>
            )}
          </>
        )}
        {step === 'delivery' && (
          <Delivery
            nextStep={() => dispatch(setContainer('payment'))}
            onBack={() => dispatch(setContainer('cart'))}
          />
        )}
        {step === 'payment' && (
          <Payment
            subtotal={formataPreco(subtotal)}
            onFinish={() => dispatch(setContainer('finish'))}
            onBack={() => dispatch(setContainer('delivery'))}
          />
        )}
        {step === 'finish' && <Finish />}
      </SideBar>
    </SidebarContainer>
  )
}

export default Sidebar
