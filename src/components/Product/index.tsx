import { Card, CardDetails, Descricao, Infos, Nota, Titulo } from './styles'
import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import Button from '../Button'
import { Cardapio, Restaurante } from '../../pages/Home'

export type Props = {
  item: Restaurante | Cardapio
  type: 'cardapio' | 'restaurante'
  onOpenModal?: () => void
}

const getDescricao = (descricao: string) => {
  if (descricao.length > 263) {
    return descricao.slice(0, 260) + '...'
  }
  return descricao
}

export const getFoodInfos = (food: Restaurante) => {
  const tags = []

  if (food.destacado) {
    tags.push('Destaque do Dia')
  }
  if (food.tipo) {
    tags.push(food.tipo)
  }

  return tags
}

const Product = ({ item, type, onOpenModal }: Props) => {
  if (type === 'restaurante') {
    const restauranteApi = item as Restaurante

    return (
      <Card type={type}>
        <img src={restauranteApi.capa} alt={restauranteApi.titulo} />
        <Infos>
          {getFoodInfos(restauranteApi).map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>
        <CardDetails>
          <div>
            <Titulo>{restauranteApi.titulo}</Titulo>
            <Nota>
              <Titulo>{restauranteApi.avaliacao}</Titulo>
              <img src={estrela} alt="Estrela" />
            </Nota>
          </div>
          <Descricao>{getDescricao(restauranteApi.descricao)}</Descricao>
          <Button
            type="link"
            to={`/perfil/${restauranteApi.id}`}
            title="Saiba mais"
          >
            Saiba mais
          </Button>
        </CardDetails>
      </Card>
    )
  }

  const cardapioApi = item as Cardapio

  return (
    <>
      <Card type={type}>
        <img src={cardapioApi.foto} alt={cardapioApi.nome} />
        <div>
          <Titulo>{cardapioApi.nome}</Titulo>
          <Descricao>{getDescricao(cardapioApi.descricao)}</Descricao>
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
