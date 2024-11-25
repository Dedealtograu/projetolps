import { GridTwoColumn } from '.'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'

import mock from './mock'

describe('<GridTwoColumn />', () => {
  it('should render GridTwoColumn', () => {
    renderTheme(<GridTwoColumn {...mock} />)

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
