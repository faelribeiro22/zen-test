import { Story, Meta } from '@storybook/react/types-6-0'
import Professional from '.'

export default {
  title: 'Professional',
  component: Professional
} as Meta

export const Basic: Story = (args) => <Professional {...args} />
