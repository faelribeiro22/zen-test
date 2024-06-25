import { screen, render } from '@testing-library/react'
import StarRating from '.'

describe('<StarRating />', () => {
  it('should render the heading', () => {
    const { container } = render(<StarRating />)
    expect(
      screen.getByRole('heading', { name: /StarRating/i })
    ).toBeInTheDocument()
  })
})
