import P from 'prop-types'
import * as styled from './styles'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'

export const GridSection = ({ title, description, text_grid = [], background = false, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <styled.Container>
        <Heading upperCase size="huge" colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <styled.Grid>
          {text_grid.map(({ title, description }) => (
            <styled.GridElement key={title}>
              <Heading size="medium" colorDark={!background} as="h3">
                {title}
              </Heading>
              <TextComponent>{description}</TextComponent>
            </styled.GridElement>
          ))}
        </styled.Grid>
      </styled.Container>
    </SectionBackground>
  )
}

GridSection.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  text_grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  sectionId: P.string,
}
