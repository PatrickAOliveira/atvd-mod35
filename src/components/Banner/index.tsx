import { BannerImg, TagItem, TitleItem } from './styles'

import macarrao from '../../assets/images/macarrao.png'
import sushi from '../../assets/images/sushi.png'
import { itens } from '../../data'

type Props = {
  id: number
}

const Banner = ({ id }: Props) => {
  const item = itens.find((i) => i.id === id)

  if (id === 1) {
    return (
      <BannerImg style={{ backgroundImage: `url(${sushi})` }}>
        <div className="container">
          <TagItem>{item?.infos.at(-1)}</TagItem>
          <TitleItem>{item?.title}</TitleItem>
        </div>
      </BannerImg>
    )
  }
  return (
    <BannerImg style={{ backgroundImage: `url(${macarrao})` }}>
      <div className="container">
        <TagItem>{item?.infos.at(-1)}</TagItem>
        <TitleItem>{item?.title}</TitleItem>
      </div>
    </BannerImg>
  )
}

export default Banner
