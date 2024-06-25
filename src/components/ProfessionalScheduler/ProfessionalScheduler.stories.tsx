import { Story, Meta } from '@storybook/react/types-6-0'
import ProfessionalScheduler from '.'

export default {
  title: 'ProfessionalScheduler',
  component: ProfessionalScheduler
} as Meta

export const Basic: Story = (args) => <ProfessionalScheduler {...args} />
