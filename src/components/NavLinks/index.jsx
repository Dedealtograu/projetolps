import P from 'prop-types'
import * as styled from './styles'
import { MenuLink } from '../MenuLink'

export const NavLinks = ({ links = [] }) => {
  return (
    <styled.Container>
      {links.map((link) => (
        <MenuLink key={link.Link} {...link} />
      ))}
    </styled.Container>
  )
}

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      Link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
}
