import P from 'prop-types'
import * as styled from './styles'
import { TextComponent } from '../TextComponent'
import { SectionContainer } from '../SectionContainer'

export const Footer = ({ html }) => {
  return (
    <styled.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </styled.Container>
  )
}

Footer.propTypes = {
  html: P.string.isRequired,
}
