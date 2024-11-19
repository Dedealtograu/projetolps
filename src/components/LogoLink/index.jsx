import P from 'prop-types'
import * as styled from './styles'
import { Heading } from '../Heading'

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size="small" upperCase>
      <styled.Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />} {!srcImg && text}
      </styled.Container>
    </Heading>
  )
}

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
}
