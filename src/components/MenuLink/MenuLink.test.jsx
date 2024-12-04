import { MenuLink } from '.'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'

describe('<MenuLink />', () => {
  it('should render MenuLink', () => {
    renderTheme(<MenuLink>children</MenuLink>)
  })

  it('should render MenuLink with children', () => {
    renderTheme(<MenuLink>children</MenuLink>)

    expect(screen.getByText('children')).toBeInTheDocument()
  })
})
