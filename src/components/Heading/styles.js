import styled, { css } from 'styled-components'

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.fontSize.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.fontSize.large};
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.fontSize.xlarge};`,
  huge: (theme) => css`
    font-size: ${theme.fonts.fontSize.xhuge};
    ${mediaFont(theme)}
  `,
}

const mediaFont = (theme) => css`
  @media ${theme.media.IteMedium} {
    font-size: ${theme.fonts.fontSize.xlarge};
  }
`

const titleCase = (upperCase) => css`
  text-transform: ${upperCase ? 'uppercase' : 'none'};
`
export const Title = styled.h1`
  ${({ theme, colorDark, size, upperCase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase(upperCase)};
  `}
`
