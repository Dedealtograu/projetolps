import P from 'prop-types'
import * as styled from './styles'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'

export const GridSection = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <styled.Container>
        <Heading upperCase size="huge" colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <styled.Grid>
          {grid.map(({ title, description }) => (
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
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
}
