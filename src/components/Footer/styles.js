import styled, { css } from 'styled-components'
import { Container as TextComponent } from '../TextComponent/styles'
import { Container as SectionContainer } from '../SectionContainer/styles'

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: ${theme.colors.mediumGray} 0.1rem solid;

    a {
      color: inherit;
      text-decoration: none;
    }

    & ${TextComponent} {
      font-size: ${theme.fonts.fontSize.small};
    }

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`
