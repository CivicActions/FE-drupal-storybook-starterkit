import Button from './button.twig';

const styleOptions = {
  default: '',
  secondary: 'button--secondary',
  tertiary: 'button--tertiary',
};

/**
 * Storybook Definition.
 */
export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    url: {
      table: {
        disable: true,
      },
    },
    classes: {
      options: ['default', 'secondary', 'tertiary'],
      mapping: styleOptions,
      control: {
        type: 'select',
        labels: {
          default: 'Default',
          secondary: 'Secondary',
          tertiary: 'Tertiary',
        },
      },
    },
  },
};

const Template = (args) => Button(args);

export const Default = Template.bind({});
Default.args = {
  text: 'This is a button',
};

export const Link = Template.bind({});
Link.args = {
  text: 'Button as a link',
  url: '#',
};
