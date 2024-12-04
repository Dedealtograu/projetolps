import P from 'prop-types'
import * as styled from './styles'

export const MenuLink = ({ children, Link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self'
  return (
    <styled.Container href={Link} target={target}>
      {children}
    </styled.Container>
  )
}

MenuLink.propTypes = {
  children: P.node.isRequired,
  Link: P.string,
  newTab: P.bool,
}
