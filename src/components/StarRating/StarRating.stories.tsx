import { Story, Meta } from '@storybook/react/types-6-0'
import StarRating from '.'

export default {
  title: 'StarRating',
  component: StarRating
} as Meta

export const Basic: Story = (args) => <StarRating {...args} />
