import styled, { css } from 'styled-components'
//import { Title as HeadingContainer } from '../Heading/styles'
import { Container as TextComponent } from '../TextComponent/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    > ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${theme.spacings.large};
  `}
`

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${theme}
    overflow: hidden;
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    ${theme}
    width: 100%;
    transition: all 300ms ease-in-out;

    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  `}
`
