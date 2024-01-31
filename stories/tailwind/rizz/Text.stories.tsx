import type { Meta, StoryObj } from '@storybook/react';

import { H1 } from '../../../packages/tailwind-theme-rizz/src/Text';

const meta: Meta<typeof H1> = {
  title: 'Components/Tailwind/Rizz/Text',
  component: H1,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof H1>;

export const Primary: Story = {
  args: {
    children: 'Heading 1',
  },
};
