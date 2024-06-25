import { screen, render } from '@testing-library/react'
import Professional from '.'

describe('<Professional />', () => {
  it('should render the heading', () => {
    const { container } = render(<Professional />)
    expect(
      screen.getByRole('heading', { name: /Professional/i })
    ).toBeInTheDocument()
  })
})
