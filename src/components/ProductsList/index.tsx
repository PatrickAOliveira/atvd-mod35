import { Cardapio, Food } from '../../pages/Home'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  itens: Food[] | Cardapio[]
  type: 'cardapio' | 'restaurante'
  onOpenModal?: (item: Cardapio) => void
}

const ProductsList = ({ itens, type, onOpenModal }: Props) => {
  return (
    <div className="container">
      <List type={type}>
        {itens.map((i) => (
          <Product
            key={i.id}
            item={i}
            type={type}
            onOpenModal={() => {
              if (type === 'cardapio' && onOpenModal) {
                onOpenModal(i as Cardapio)
              }
            }}
          />
        ))}
      </List>
    </div>
  )
}

export default ProductsList
