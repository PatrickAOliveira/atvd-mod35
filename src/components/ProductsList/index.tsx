import Food from '../../models/Food'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  itens: Food[]
  type: 'produto' | 'restaurante'
  onOpenModal?: (item: Food) => void
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
            onOpenModal={() => onOpenModal && onOpenModal(i)}
          />
        ))}
      </List>
    </div>
  )
}

export default ProductsList
