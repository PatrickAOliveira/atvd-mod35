import Button from '../../components/Button'
import { Titulo } from '../../components/Product/styles'
import { Descricao } from '../../components/Product/styles'
import { CartContainer, CartItem, ImgItem, TotalContainer } from './styles'
import lixeira from '../../assets/images/lixeira.png'
import { Cardapio } from '../../pages/Home'
import { formataPreco } from '../../components/Modal'

type Props = {
  items: Cardapio[]
  removeItem: (index: number) => void
  nextStep: () => void
}

const Cart = ({ items, removeItem, nextStep }: Props) => {
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
            <a title="Remover" onClick={() => removeItem(index)}>
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
