import P from 'prop-types'
import * as styled from './styles'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'

export const GridTwoColumn = ({ title, description, image, background = false, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <styled.Container background={background}>
        <styled.TextContainer>
          <Heading upperCase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{description}</TextComponent>
        </styled.TextContainer>
        <styled.ImageContainer>
          <styled.Image src={image.url} alt={title} />
        </styled.ImageContainer>
      </styled.Container>
    </SectionBackground>
  )
}

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  image: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
}
