import { screen, render } from '@testing-library/react'
import Main from '.'

const mock = [
  {
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
]

describe('<Main />', () => {
  it('should render the professionals list', () => {
    render(<Main professionals={mock} />)
    expect(screen.getByRole('link', { name: 'Ebonee Grewar' }))
  })
})
