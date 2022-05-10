import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

twigDrupal(Twig);

// Import compiled USWDS styles.
import '../node_modules/uswds/dist/css/uswds.min.css';
import '../src/styles.scss';

window.Drupal = { behaviors: {} };

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
