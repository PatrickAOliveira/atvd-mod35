import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'

import { useGetRestaurantesQuery } from '../../services/api'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { data: restaurante, isLoading } = useGetRestaurantesQuery()

  if (isLoading || !restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero />
      <ProductsList itens={restaurante} type="restaurante" />
    </>
  )
}

export default Home
