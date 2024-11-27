import P from 'prop-types'
import * as styled from './styles'

export const TextComponent = ({ children }) => {
  return <styled.Container dangerouslySetInnerHTML={{ __html: children }} />
}

TextComponent.propTypes = {
  children: P.node.isRequired,
}
