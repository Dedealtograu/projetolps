import styled, { css } from 'styled-components'

const containerBackgroundActivate = (theme) => css`
  background: ${theme.colors.PrimaryColor};
  color: ${theme.colors.white};
`

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.PrimaryColor};
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`
