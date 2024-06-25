import { Story, Meta } from '@storybook/react/types-6-0'
import ProfessionalInformation from '.'

export default {
  title: 'ProfessionalInformation',
  component: ProfessionalInformation
} as Meta

export const Basic: Story = (args) => <ProfessionalInformation {...args} />
