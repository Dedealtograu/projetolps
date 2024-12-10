import styled, { css } from 'styled-components'

export const Container = styled.a`
  ${({ theme }) => css`
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.primaryColor};

    > img {
      height: 3rem;
    }
  `}
`
