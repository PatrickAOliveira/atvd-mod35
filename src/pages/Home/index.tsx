import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'
import { itens } from '../../data'

const Home = () => (
  <>
    <Hero />
    <ProductsList itens={itens} type="restaurante" />
  </>
)

export default Home
