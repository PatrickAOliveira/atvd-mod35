import styled from 'styled-components'

export const BannerImg = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  position: relative;
  color: #fff;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    content: '';
    opacity: 0.5;
  }
`

export const TagItem = styled.h2`
  position: relative;
  font-weight: lighter;
  font-size: 32px;
  padding-top: 25px;
`

export const TitleItem = styled(TagItem)`
  font-weight: bold;
  margin-top: 156px;
  padding-top: 0;
`
