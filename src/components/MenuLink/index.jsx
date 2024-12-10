import P from 'prop-types'
import * as styled from './styles'

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self'
  return (
    <styled.Container href={link} target={target}>
      {children}
    </styled.Container>
  )
}

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string,
  newTab: P.bool,
}
