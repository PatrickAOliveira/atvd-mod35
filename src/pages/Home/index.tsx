import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Food = {
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
  const [restaurante, setRestaurante] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])

  return (
    <>
      <Hero />
      <ProductsList itens={restaurante} type="restaurante" />
    </>
  )
}

export default Home
