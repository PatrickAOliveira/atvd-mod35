import { Card, CardDetails, Descricao, Infos, Nota, Titulo } from './styles'
import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import Button from '../Button'
import Food from '../../models/Food'

export type Props = {
  item: Food
  type: 'produto' | 'restaurante'
  onOpenModal?: () => void
}

const Product = ({ item, type, onOpenModal }: Props) => {
  if (type === 'restaurante') {
    return (
      <Card type={type}>
        <img src={item.image} alt={item.title} />
        <Infos>
          {item.infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>
        <CardDetails>
          <div>
            <Titulo>{item.title}</Titulo>
            <Nota>
              <Titulo>{item.grade}</Titulo>
              <img src={estrela} alt="Estrela" />
            </Nota>
          </div>
          <Descricao>{item.description}</Descricao>
          <Button type="link" to={`/perfil/${item.id}`} title="Saiba mais">
            Saiba mais
          </Button>
        </CardDetails>
      </Card>
    )
  }

  return (
    <>
      <Card type={type}>
        <img src={item.image} alt={item.title} />
        <div>
          <Titulo>{item.title}</Titulo>
          <Descricao>{item.description}</Descricao>
        </div>
        <Button
          type="button"
          title="Adicionar ao carrinho"
          onClick={onOpenModal}
        >
          Adicionar ao carrinho
        </Button>
      </Card>
    </>
  )
}

export default Product
