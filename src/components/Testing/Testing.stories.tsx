import type { Meta, StoryObj } from '@storybook/react-native';
import { Testing } from './Testing';

type Story = StoryObj<typeof TestingMeta>;
const TestingMeta: Meta<typeof Testing> = {
  component: Testing,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {},
};

export default TestingMeta;

export const Primary: Story = {};
