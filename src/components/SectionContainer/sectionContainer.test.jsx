import { SectionContainer } from '.'
import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'

describe('<SectionContainer />', () => {
  it('should render SectionContainer', () => {
    renderTheme(<SectionContainer>children</SectionContainer>)

    expect(screen.getByText('children')).toBeInTheDocument()
  })
})
