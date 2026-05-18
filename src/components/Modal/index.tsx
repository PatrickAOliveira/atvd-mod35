import Food from '../../models/Food'
import { ModalBox, Overlay } from './styles'

import { Descricao, Titulo } from '../Product/styles'
import Button from '../Button'

export type Props = {
  isOpen: boolean
  item?: Food | null
  closeModal?: () => void
  addToCart: () => void
}

const Modal = ({ isOpen, item, closeModal, addToCart }: Props) => (
  <Overlay isOpen={isOpen} onClick={closeModal}>
    <div className="container">
      <ModalBox>
        <img src={item?.image} alt={item?.title} />
        <div>
          <Titulo>{item?.title}</Titulo>
          <Descricao>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
          </Descricao>
          <Descricao>Serve: de 2 a 3 pessoas</Descricao>
          <Button
            type="button"
            title="adicionar ao carrinho"
            onClick={addToCart}
          >
            {`Adicionar ao carrinho R$ ${item?.price.toFixed(2)}`}
          </Button>
        </div>
      </ModalBox>
    </div>
  </Overlay>
)

export default Modal
