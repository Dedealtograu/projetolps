import { Footer } from '.'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'

describe('<Footer />', () => {
  it('should render Footer', () => {
    const { container } = renderTheme(<Footer html={'<h1>Ola</h1>'} />)

    expect(screen.getByRole('heading')).toBeInTheDocument()

    expect(container).toMatchInlineSnapshot()
  })
})
