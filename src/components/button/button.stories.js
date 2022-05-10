import { addDecorator } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import button from './button.twig';
import './button';

const styleOptions = { primary: 'button--primary', secondary: 'button--secondary' };

addDecorator((storyFn) => {
  useEffect(() => Drupal.behaviors.button.attach(document), []);
  return storyFn();
});

/**
 * Storybook Definition.
 */
export default {
  component: button,
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
      options: ['primary', 'secondary'],
      mapping: styleOptions,
      control: {
        type: 'select',
        labels: {
          primary: 'Primary',
          secondary: 'Secondary',
        },
      },
    },
  },
};

const Template = (args) => button(args);

export const Default = Template.bind({});
Default.args = {
  text: 'This is a button',
};

export const Link = Template.bind({});
Link.args = {
  text: 'Button as a link',
  url: '#',
};
