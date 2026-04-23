import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'
import Food from '../../models/Food'

import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'

const itens: Food[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    image: sushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    grade: '4.9'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    image: macarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    grade: '4.6'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    image: macarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    grade: '4.6'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    image: macarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    grade: '4.6'
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    image: macarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    grade: '4.6'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    image: macarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    grade: '4.6'
  }
]

const Home = () => (
  <>
    <Hero />
    <ProductsList itens={itens} />
  </>
)

export default Home
