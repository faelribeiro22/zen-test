import { screen, render } from '@testing-library/react'
import ProfessionalInformation from '.'

describe('<ProfessionalInformation />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProfessionalInformation />)
    expect(
      screen.getByRole('heading', { name: /ProfessionalInformation/i })
    ).toBeInTheDocument()
  })
})
