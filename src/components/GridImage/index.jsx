import P from 'prop-types'
import * as styled from './styles'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'
// eslint-disable-next-line
export const GridImage = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <styled.Container>
        <Heading upperCase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <styled.Grid>
          {grid.map((el) => (
            <styled.GridElement key={`${el.srcImg}${el.altText}`}>
              <styled.Image src={el.srcImg} alt={el.altText} />
            </styled.GridElement>
          ))}
        </styled.Grid>
      </styled.Container>
    </SectionBackground>
  )
}

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
}
