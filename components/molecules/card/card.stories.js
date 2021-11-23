import React from 'react';
import Component from './card.twig';
import './card';

/**
 * Storybook Definition.
 */
export default {
  component: Component,
  title: 'Molecules/Card',
};

const Template = (args) => <div dangerouslySetInnerHTML={{ __html: Component(args) }} />;

export const StandardCard = Template.bind({});
StandardCard.args = {
  card_title: 'This is a card title',
  card_subtitle: 'Card subtitle',
  card_cta_url: '#',
  card_cta_text: 'Card CTA',
};
