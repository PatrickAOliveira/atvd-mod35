import { useEffect, useState } from 'react'

import { BannerImg, TagItem, TitleItem } from './styles'
import { Food } from '../../pages/Home'
import { getFoodInfos } from '../Product'

type Props = {
  id: number
}

const Banner = ({ id }: Props) => {
  const [food, setFood] = useState<Food>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res: Food) => setFood(res))
  }, [id])

  if (!food) {
    return <h3>Carregando...</h3>
  }
  return (
    <BannerImg style={{ backgroundImage: `url(${food.capa})` }}>
      <div className="container">
        <TagItem>{getFoodInfos(food).at(-1)}</TagItem>
        <TitleItem>{food.titulo}</TitleItem>
      </div>
    </BannerImg>
  )
}

export default Banner
