import styled, { css } from 'styled-components'
import { Container as SectionContainer } from '../SectionContainer/styles'
import { Title as Heading } from '../Heading/styles'

// eslint-disable-next-line
const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`
export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    background: ${theme.colors.white};
    transition: all 300ms ease-in-out;

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.IteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible(theme)}

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      & ${Heading} {
        padding: ${theme.spacings.large};
        display: flex;
        justify-content: center;
      }
    }
  `}
`

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.IteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
    }
  `}
`
export const Button = styled.button`
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: #000000;
    color: ${theme.colors.white};
    border: none;
    display: none;
    pointer-events: ${visible ? 'none' : 'all'};

    @media ${theme.media.IteMedium} {
      display: flex;
      text-align: center;
      justify-content: center;
    }

    > svg {
      margin: auto;
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`
