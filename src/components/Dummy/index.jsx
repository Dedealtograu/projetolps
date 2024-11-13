import P from 'prop-types'
import * as styled from './styles'

export const Dummy = () => {
  return (
    <styled.Container>
      <h1>{children}</h1>
    </styled.Container>
  )
}

Dummy.propTypes = {
  children: P.node.isRequired,
}
