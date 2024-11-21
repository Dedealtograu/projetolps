import P from 'prop-types'
import { SectionContainer } from '../SectionContainer'
import * as styled from './styles'

export const SectionBackground = ({ children, background = false }) => {
  return (
    <styled.Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </styled.Container>
  )
}

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
}
