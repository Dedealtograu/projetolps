import { screen } from '@testing-library/react'
import { Heading } from '.'
import { renderTheme } from '../../styles/render-theme'
import { theme } from '../../styles/theme'

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Texto</Heading>)
    const heading = screen.getByRole('heading', { name: 'Texto' })

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.fontSize.xhuge,
      'text-transform': 'none',
    })
  })

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Texto</Heading>)
    const heading = screen.getByRole('heading', { name: 'Texto' })

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    })
  })

  it('should render correct size', () => {
    renderTheme(<Heading size="huge">Texto</Heading>)
    const heading = screen.getByRole('heading', { name: 'Texto' })

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.fontSize.xhuge,
    })
  })
})
