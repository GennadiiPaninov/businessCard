import { theme } from '@/styles'
import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  width: 100%;
  background-color: rgba(12, 7, 10, 0.7);
  border-bottom: 1px solid #ff8906;
  z-index: 9999;

  @media ${theme.media.tablet} {
    border-bottom: none;
  }
`

export const S = {
  Header,
}
