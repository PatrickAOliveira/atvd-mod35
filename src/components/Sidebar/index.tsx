import Food from '../../models/Food'
import { SideBar, SidebarContainer, SideOverlay } from './styles'
import { useState } from 'react'
import Cart from '../../containers/Cart'
import Delivery from '../../containers/Delivery'
import Payment from '../../containers/Payment'
import Finish from '../../containers/Finish'

type Props = {
  isOpen: boolean
  items: Food[]
  closeCart: () => void
  removeItem: (index: number) => void
}

const Sidebar = ({ isOpen, items, closeCart, removeItem }: Props) => {
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'finish'>(
    'cart'
  )
  const subtotal = items.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)

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
            subtotal={subtotal}
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
