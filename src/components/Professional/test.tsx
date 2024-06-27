import { screen, render } from '@testing-library/react'
import Professional from '.'
import { mock } from 'components/ProfessionalInformation/test'

// jest.mock('components/ProfessionalInformation', () => ({
//   __esModule: true,
//   default: function Mock() {
//     return <div data-testid="Mock ProfessionalInformation" />
//   }
// }))

describe('<Professional />', () => {
  it('should render component ProfessionalInformation', () => {
    render(<Professional profissional={mock} />)
    expect(
      screen.getByRole('heading', { name: /Ebonee Grewa/i })
    ).toBeInTheDocument()
  })
})
