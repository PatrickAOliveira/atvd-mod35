import { BannerImg, TagItem, TitleItem } from './styles'

import { getFoodInfos } from '../Product'
import { useGetCardapiosQuery } from '../../services/api'

type Props = {
  id: string
}

const Banner = ({ id }: Props) => {
  const { data: restaurante } = useGetCardapiosQuery(id)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }
  return (
    <BannerImg style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <div className="container">
        <TagItem>{getFoodInfos(restaurante).at(-1)}</TagItem>
        <TitleItem>{restaurante.titulo}</TitleItem>
      </div>
    </BannerImg>
  )
}

export default Banner
