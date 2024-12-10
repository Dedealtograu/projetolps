import P from 'prop-types'
import * as styled from './styles'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'

export const GridContent = ({ title, content, background = false, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <styled.Container>
        <Heading upperCase colorDark={!background} as="h2">
          {title}
        </Heading>
        <styled.Html>
          {content.map((el) => (
            <TextComponent key={el}>{el.children[0].text}</TextComponent>
          ))}
        </styled.Html>
      </styled.Container>
    </SectionBackground>
  )
}

GridContent.propTypes = {
  title: P.string.isRequired,
  content: P.arrayOf(P.string),
  background: P.bool,
  sectionId: P.string,
}
