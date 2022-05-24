import { addDecorator } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import Component from './card.twig';
// Import component's Drupal-scoped js file.
import './card';

// Include Drupal-scoped js in component display.
addDecorator((storyFn) => {
  useEffect(() => Drupal.behaviors.card.attach(document));
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
  card_links_toggle_text: 'Links',
  card_links_list_id: 'tag-list',
  card_links: [
    { url: '#', text: 'Pellentesque Tellus' },
    { url: '#', text: 'Justo Venenatis' },
  ],
};
