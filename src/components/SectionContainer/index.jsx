import P from 'prop-types'
import * as styled from './styles'

export const SectionContainer = ({ children }) => {
  return <styled.Container>{children}</styled.Container>
}

SectionContainer.propTypes = {
  children: P.node.isRequired,
}
