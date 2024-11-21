import { SectionBackground } from '.'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>children</h1>
      </SectionBackground>,
    )
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with background light', () => {
    renderTheme(
      <SectionBackground>
        <h1>children</h1>
      </SectionBackground>,
    )

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
