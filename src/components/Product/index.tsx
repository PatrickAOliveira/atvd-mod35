import { Card, CardDetails, Descricao, Nota, Titulo } from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  image: string
  description: string
  infos: string[]
  grade: string
}

const Product = ({ title, image, description, grade }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <CardDetails>
      <div>
        <Titulo>{title}</Titulo>
        <Nota>
          <Titulo>{grade}</Titulo>
          <img src={estrela} alt="Estrela" />
        </Nota>
      </div>
      <Descricao>{description}</Descricao>
    </CardDetails>
  </Card>
)

export default Product
