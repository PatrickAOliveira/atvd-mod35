import { Cardapio } from '../../pages/Home'
import { ModalBox, Overlay } from './styles'

import { Descricao, Titulo } from '../Product/styles'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/modal'

export type Props = {
  item: Cardapio
  addToCart?: () => void
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Modal = ({ item, addToCart }: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.modal)
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(close())
  }

  if (!item) {
    return <h3>Carregando...</h3>
  }

  return (
    <Overlay className={isOpen ? 'is-open' : ''} onClick={closeModal}>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <ModalBox>
          <img src={item.foto} alt={item.nome} />
          <div>
            <Titulo>{item.nome}</Titulo>
            <Descricao>{item.descricao}</Descricao>
            <Descricao>Serve: de {item.porcao}</Descricao>
            <Button
              type="button"
              title="adicionar ao carrinho"
              onClick={addToCart}
            >
              {`Adicionar ao carrinho ${formataPreco(item.preco)}`}
            </Button>
          </div>
        </ModalBox>
      </div>
    </Overlay>
  )
}

export default Modal
