import styled, { css } from 'styled-components'
import { Title as HeadingContainer } from '../Heading/styles'
import { Container as TextComponent } from '../TextComponent/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${theme.spacings.large};
    overflow: hidden;
    width: 100%;

    @media ${theme.media.IteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`

export const GridElement = styled.div`
  ${({ theme }) => css`

    ${HeadingContainer} {
      position: relative;
      left: 5rem;
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: ${theme.fonts.fontSize.xhuge};
      left: -4rem;
      top: -2rem;
      transform: rotate(5deg);
    }
  `}
`
