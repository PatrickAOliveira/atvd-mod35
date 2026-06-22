import { SideBar, SidebarContainer, SideOverlay } from './styles'
import { useState } from 'react'
import Cart from '../../containers/Cart'
import Delivery from '../../containers/Delivery'
import Payment from '../../containers/Payment'
import Finish from '../../containers/Finish'
import { Cardapio } from '../../pages/Home'
import { formataPreco } from '../Modal'

type Props = {
  isOpen: boolean
  items: Cardapio[]
  closeCart: () => void
  removeItem: (index: number) => void
}

const Sidebar = ({ isOpen, items, closeCart, removeItem }: Props) => {
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'finish'>(
    'cart'
  )
  const subtotal = items.reduce((acc, curr) => acc + curr.preco, 0)

  const handleClose = () => {
    closeCart()
    setTimeout(() => setStep('cart'), 300)
  }

  return (
    <SidebarContainer isOpen={isOpen}>
      <SideOverlay onClick={handleClose} />
      <SideBar>
        {step === 'cart' && (
          <>
            {items.length > 0 ? (
              <Cart
                items={items}
                removeItem={removeItem}
                nextStep={() => setStep('delivery')}
              />
            ) : (
              <p>O carrinho está vazio</p>
            )}
          </>
        )}
        {step === 'delivery' && (
          <Delivery
            nextStep={() => setStep('payment')}
            onBack={() => setStep('cart')}
          />
        )}
        {step === 'payment' && (
          <Payment
            subtotal={formataPreco(subtotal)}
            onFinish={() => setStep('finish')}
            onBack={() => setStep('delivery')}
          />
        )}
        {step === 'finish' && <Finish />}
      </SideBar>
    </SidebarContainer>
  )
}

export default Sidebar
