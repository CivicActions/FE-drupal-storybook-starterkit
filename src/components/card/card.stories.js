import { addDecorator } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import Component from './card.twig';
import './card';

addDecorator((storyFn) => {
  useEffect(() => Drupal.behaviors.card.attach(document), []);
  return storyFn();
});

/**
 * Storybook Definition.
 */
export default {
  component: Component,
  title: 'Components/Card',
};

const Template = (args) => Component(args);

export const StandardCard = Template.bind({});
StandardCard.args = {
  card_title: 'This is a card title',
  card_subtitle: 'Card subtitle',
  card_cta_url: '#',
  card_cta_text: 'Card CTA',
  card_tags: [
    { url: '#', text: 'Tag 1' },
    { url: '#', text: 'Tag2' },
  ],
};
