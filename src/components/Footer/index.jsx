import P from 'prop-types'
import * as styled from './styles'
import { TextComponent } from '../TextComponent'
import { SectionContainer } from '../SectionContainer'

export const Footer = ({ footerHtlm }) => {
  return (
    <styled.Container>
      <SectionContainer>
        <TextComponent>{footerHtlm}</TextComponent>
      </SectionContainer>
    </styled.Container>
  )
}

Footer.propTypes = {
  footerHtlm: P.string.isRequired,
}
