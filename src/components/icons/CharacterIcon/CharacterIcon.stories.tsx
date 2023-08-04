import type { Meta, StoryObj } from '@storybook/react-native';
import { CharacterIcon } from './CharacterIcon';

const CharacterIconMeta: Meta<typeof CharacterIcon> = {
  component: CharacterIcon,
  args: {},
};

export default CharacterIconMeta;
type Story = StoryObj<typeof CharacterIcon>;

export const Basic: Story = {
  name: 'Default',
};
