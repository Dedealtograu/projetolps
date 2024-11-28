import { GoTop } from '.'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'

describe('<GoTop />', () => {
  it('should render GoTop', () => {
    renderTheme(<GoTop />)

    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument()
  })
})
