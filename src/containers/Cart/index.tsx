import Button from '../../components/Button'
import { Titulo } from '../../components/Product/styles'
import { Descricao } from '../../components/Product/styles'
import { CartContainer, CartItem, ImgItem, TotalContainer } from './styles'
import Food from '../../models/Food'
import lixeira from '../../assets/images/lixeira.png'

type Props = {
  items: Food[]
  removeItem: (index: number) => void
  nextStep: () => void
}

const Cart = ({ items, removeItem, nextStep }: Props) => {
  const subtotal = items.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)

  return (
    <CartContainer>
      <ul>
        {items.map((i, index) => (
          <CartItem key={index}>
            <ImgItem src={i.image} alt={i.title} />
            <div>
              <Titulo>{i.title}</Titulo>
              <Descricao>{`R$ ${i.price.toFixed(2)}`}</Descricao>
            </div>
            <a title="Remover" onClick={() => removeItem(index)}>
              <img src={lixeira} alt="Lixeira" />
            </a>
          </CartItem>
        ))}
      </ul>
      <TotalContainer>
        <p>Valor total</p>
        <span>{`R$ ${subtotal}`}</span>
      </TotalContainer>
      <Button title="Delivery" type="button" onClick={nextStep}>
        Continuar com a entrega
      </Button>
    </CartContainer>
  )
}

export default Cart
