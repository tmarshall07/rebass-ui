import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../packages/tailwind-theme-rizz/src/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Tailwind/Rizz/Button',
  component: Button,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // cn: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
    color: 'primary',
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
    children: 'Rounded Button',
  },
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    children: 'Transparent Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};
