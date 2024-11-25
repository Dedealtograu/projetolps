import P from 'prop-types'
import * as styled from './styles'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'

export const GridTwoColumn = ({ title, text, srcImg, background = false }) => {
  return (
    <SectionBackground background={background}>
      <styled.Container>
        <styled.TextContainer>
          <Heading upperCase>{title}</Heading>
          <TextComponent>{text}</TextComponent>
        </styled.TextContainer>
        <styled.ImageContainer>
          <styled.Image src={srcImg} alt={title} />
        </styled.ImageContainer>
      </styled.Container>
    </SectionBackground>
  )
}

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
}
