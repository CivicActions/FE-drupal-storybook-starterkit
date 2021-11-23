import heading from './heading.twig';

/**
 * Storybook Definition.
 */
export default {
  component: heading,
  title: 'Atoms/Heading',
  argTypes: {
    text: {
      control: { type: 'text' }
    },
    level: {
      table: {
        disable: true
      }
    },
  }
};

const Template = (args) => <div dangerouslySetInnerHTML={{ __html: heading(args) }} />;

export const H1 = Template.bind({});
H1.args = {
  text: 'H1 - Etiam Nullam Ullamcorper Malesuada Quam',
  level: '1'
};

export const H2 = Template.bind({});
H2.args = {
  text: 'H2 - Etiam Nullam Ullamcorper Malesuada Quam',
  level: '2'
};

export const H3 = Template.bind({});
H3.args = {
  text: 'H3 - Etiam Nullam Ullamcorper Malesuada Quam',
  level: '3'
};

export const H4 = Template.bind({});
H4.args = {
  text: 'H4 - Etiam Nullam Ullamcorper Malesuada Quam',
  level: '4'
};

export const H5 = Template.bind({});
H5.args = {
  text: 'H5 - Etiam Nullam Ullamcorper Malesuada Quam',
  level: '5'
};

export const H6 = Template.bind({});
H6.args = {
  text: 'H6 - Etiam Nullam Ullamcorper Malesuada Quam',
  level: '6'
};
