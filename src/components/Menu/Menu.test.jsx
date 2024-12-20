import { Menu } from '.'
import { fireEvent, screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'

import linksMock from '../NavLinks/mock'
import { theme } from '../../styles/theme'
const logoData = {
  text: 'Logo',
  link: '#target',
}

describe('<Menu />', () => {
  it('should render Logo and Menu Nav', () => {
    const { container } = renderTheme(<Menu links={linksMock} logoData={logoData} />)

    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main menu' })).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should render menu mobile and button for open and close the menu', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />)

    const button = screen.getByLabelText('Open/Close menu')
    //const menuContainer = button.nextSibling

    expect(button).toHaveStyleRule('display', 'none')
    /* expect(button).toHaveStyleRule('display', 'none', {
      media: theme.media.IteMedium,
    })

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.IteMedium,
    })
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()

    fireEvent.click(button)
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.IteMedium,
    })
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()

    fireEvent.click(menuContainer)
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.IteMedium,
    }) */
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('should not render links', () => {
    renderTheme(<Menu logoData={logoData} />)
    expect(screen.queryByRole('navigation', { name: 'Main menu' }).firstChild).not.toBeInTheDocument()
  })
})
