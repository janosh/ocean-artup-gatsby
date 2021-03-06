import styled from 'styled-components'

import { NavLink } from '../Nav/styles'
import { mediaQueries } from 'utils/mediaQueries'

export const HeaderContainer = styled.header`
  position: absolute;
  width: fill-available;
  z-index: 3;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  grid-auto-flow: column;
  grid-gap: 3vw;
  align-items: center;
  padding: 1vh calc(0.75em + 1vw);
  grid-template-areas: 'nav title search';
  grid-template-columns: auto 1fr auto;
  ${mediaQueries.minTablet} {
    grid-template-areas: 'title nav search';
  }
`

export const SiteTitle = styled(NavLink).attrs({
  activeClassName: null,
})`
  grid-area: title;
  width: 5em;
  display: inline-grid;
  justify-self: center;
`
