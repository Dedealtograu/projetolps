import { Dummy } from '.'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'

describe('<Dummy />', () => {
  it('should render Dummy', () => {
    renderTheme(<Dummy>children</Dummy>)

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
