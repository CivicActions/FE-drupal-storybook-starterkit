import React from 'react';
import button from './button.twig';

const styleOptions = { primary: 'button--primary', secondary: 'button--secondary' };

/**
 * Storybook Definition.
 */
export default {
  component: button,
  title: 'Atoms/Button',
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

const Template = (args) => <div dangerouslySetInnerHTML={{ __html: button(args) }} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a button',
};

export const Link = Template.bind({});
Link.args = {
  text: 'Button as a link',
  url: '#',
};
