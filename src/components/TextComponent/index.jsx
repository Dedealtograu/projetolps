import P from 'prop-types'
import * as styled from './styles'

export const TextComponent = ({ children }) => {
  return <styled.Container>{children}</styled.Container>
}

TextComponent.propTypes = {
  children: P.node.isRequired,
}
