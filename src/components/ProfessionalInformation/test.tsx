import { screen, render } from '@testing-library/react'
import ProfessionalInformation from '.'

export const mock = {
  id: 3,
  avatar: 'https://i.pravatar.cc/300',
  name: 'Ebonee Grewar',
  description:
    'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
  title: 'Pharmacist',
  location: 'Stockholm',
  reviewNote: 1,
  value: 99,
  numberReviews: 43,
  duration: 21
}

describe('<ProfessionalInformation />', () => {
  it('should render props profissional information', () => {
    render(<ProfessionalInformation {...mock} />)
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://i.pravatar.cc/300'
    )
    expect(
      screen.getByRole('heading', { name: /Ebonee Grewa/i })
    ).toBeInTheDocument()

    expect(screen.getByText(mock.title)).toBeInTheDocument()
    expect(screen.getByText(mock.location)).toBeInTheDocument()
    expect(
      screen.getByText(`(${mock.numberReviews} reviews)`)
    ).toBeInTheDocument()
    expect(screen.getByText(`R$${mock.value}`)).toBeInTheDocument()
    expect(screen.getByText(mock.description)).toBeInTheDocument()
  })
})
