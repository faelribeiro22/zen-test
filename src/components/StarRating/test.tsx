import { screen, render } from '@testing-library/react'
import StarRating from '.'

describe('<StarRating />', () => {
  it('should render star component', () => {
    render(<StarRating rating={5} />)
    expect(screen.getAllByTestId('star').length).toEqual(5)
    expect(screen.getAllByTestId('star')[0]).toHaveStyle({ color: '#ffc107' })
  })
})
