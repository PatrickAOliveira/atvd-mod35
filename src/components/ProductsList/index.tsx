import Food from '../../models/Food'
import Product from '../Product'
import { List } from './styles'

type Props = {
  itens: Food[]
}

const ProductsList = ({ itens }: Props) => (
  <div className="container">
    <List>
      {itens.map((i) => (
        <Product
          key={i.id}
          title={i.title}
          image={i.image}
          description={i.description}
          infos={i.infos}
          grade={i.grade}
        />
      ))}
    </List>
  </div>
)

export default ProductsList
