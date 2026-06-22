import { Cardapio } from '../../pages/Home'
import { ModalBox, Overlay } from './styles'

import { Descricao, Titulo } from '../Product/styles'
import Button from '../Button'

export type Props = {
  isOpen: boolean
  item: Cardapio
  closeModal?: () => void
  addToCart: () => void
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Modal = ({ isOpen, item, closeModal, addToCart }: Props) => {
  if (!item) {
    return <h3>Carregando...</h3>
  }

  return (
    <Overlay isOpen={isOpen} onClick={closeModal}>
      <div className="container">
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
