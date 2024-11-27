import P from 'prop-types'
import * as styled from './styles'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'

export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground background={background}>
      <styled.Container>
        <Heading upperCase colorDark={!background} as="h2">
          {title}
        </Heading>
        <styled.Html>
          <TextComponent>{html}</TextComponent>
        </styled.Html>
      </styled.Container>
    </SectionBackground>
  )
}

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
}
