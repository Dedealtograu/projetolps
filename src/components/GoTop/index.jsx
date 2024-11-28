import * as styled from './styles'
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp'

export const GoTop = () => {
  return (
    <styled.Container href="#" aria-label="Go to top" title="Go to top">
      <KeyboardArrowUp />
    </styled.Container>
  )
}
