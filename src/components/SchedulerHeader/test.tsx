import { screen, render } from '@testing-library/react'
import SchedulerHeader from '.'

describe('<SchedulerHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<SchedulerHeader />)
    expect(
      screen.getByRole('heading', { name: /SchedulerHeader/i })
    ).toBeInTheDocument()
  })
})
