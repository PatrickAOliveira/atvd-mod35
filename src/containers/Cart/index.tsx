import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/Button'
import { Titulo } from '../../components/Product/styles'
import { Descricao } from '../../components/Product/styles'
import { CartContainer, CartItem, ImgItem, TotalContainer } from './styles'
import lixeira from '../../assets/images/lixeira.png'
import { formataPreco } from '../../components/Modal'
import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'

type Props = {
  nextStep: () => void
}

const Cart = ({ nextStep }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const subtotal = items.reduce((acc, curr) => acc + curr.preco, 0)

  return (
    <CartContainer>
      <ul>
        {items.map((i, index) => (
          <CartItem key={index}>
            <ImgItem src={i.foto} alt={i.nome} />
            <div>
              <Titulo>{i.nome}</Titulo>
              <Descricao>{formataPreco(i.preco)}</Descricao>
            </div>
            <a title="Remover" onClick={() => dispatch(remove(index))}>
              <img src={lixeira} alt="Lixeira" />
            </a>
          </CartItem>
        ))}
      </ul>
      <TotalContainer>
        <p>Valor total</p>
        <span>{formataPreco(subtotal)}</span>
      </TotalContainer>
      <Button title="Delivery" type="button" onClick={nextStep}>
        Continuar com a entrega
      </Button>
    </CartContainer>
  )
}

export default Cart
