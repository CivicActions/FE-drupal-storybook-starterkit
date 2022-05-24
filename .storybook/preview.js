import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

twigDrupal(Twig);

// Import USWDS js.
import '../node_modules/uswds/dist/js/uswds-init.min.js';
import '../node_modules/uswds/dist/js/uswds.min.js';

// Import USWDS styles.
import '../node_modules/uswds/dist/css/uswds.min.css';
// Custom styles.
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
