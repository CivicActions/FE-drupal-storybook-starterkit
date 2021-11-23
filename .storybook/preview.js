import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

twigDrupal(Twig);

import '../components/styles.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
