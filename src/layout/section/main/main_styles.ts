import { Link } from 'react-scroll'

import { Button } from '@/components'
import { font, theme } from '@/styles'
import styled from 'styled-components'

const Main = styled.section`
  padding-top: 130px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  @media ${theme.media.tablet} {
    padding-top: 70px;
  }
`

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 3fr 2fr;
  column-gap: 50px;
  align-content: center;
  }
  @media ${theme.media.tablet} {
    justify-content: center;
    grid-template-columns: unset;
    grid-auto-rows: unset;
    row-gap: 40px;
  }
`
const PhotoWrapper = styled.div`
  margin: 0 auto;
  grid-row-start: 1;
  grid-row-end: 3;
  @media ${theme.media.tablet} {
    grid-row-start: unset;
    grid-row-end: unset;
  }
`
const Photo = styled.img`
  position: relative;
  max-width: 410px;
  width: 100%;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: ${theme.shadow.main};
`

const Name = styled.h2`
  ${font({ color: theme.colors.accent, max: 50, min: 34, weight: 800 })};
`

const MainTitle = styled.h1`
  ${font({ max: 38, min: 30, weight: 700 })};
  padding-top: 30px;
  p {
    display: none;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-content: start;
  padding-top: 20px;
  width: 100%;
  ${Button} {
    &:last-child {
      background-color: ${theme.colors.primaryBg};
    }
  }

  @media ${theme.media.tablet} {
    padding-top: 0;
  }
`

const InfoWrapper = styled.div`
  display: grid;
  align-content: center;
  @media ${theme.media.tablet} {
    grid-row-start: 1;
  }
`

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  gap: 12px;
`

export const S = {
  ButtonWrapper,
  InfoWrapper,
  Main,
  MainTitle,
  MainWrapper,
  Name,
  NavLink,
  Photo,
  PhotoWrapper,
}
