import { screen, render } from '@testing-library/react'
import ProfessionalScheduler from '.'

describe('<ProfessionalScheduler />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProfessionalScheduler />)
    expect(
      screen.getByRole('heading', { name: /ProfessionalScheduler/i })
    ).toBeInTheDocument()
  })
})
