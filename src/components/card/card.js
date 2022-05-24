((Drupal) => {
  // eslint-disable-next-line no-param-reassign
  Drupal.behaviors.card = {
    attach(context) {
      const cardLinks = context.querySelector('.card__links');
      if (cardLinks) {
        const cardToggle = cardLinks.querySelector('.card__links-toggle');
        cardToggle.addEventListener('click', function cardToggleClick() {
          const cardList = this.parentNode.querySelector('.card__links-list');
          if (this.getAttribute('aria-expanded') === 'true') {
            this.setAttribute('aria-expanded', 'false');
            cardList.setAttribute('aria-hidden', 'true');
          } else {
            this.setAttribute('aria-expanded', 'true');
            cardList.setAttribute('aria-hidden', 'false');
          }
        });
      }
    },
  };
})(Drupal);
