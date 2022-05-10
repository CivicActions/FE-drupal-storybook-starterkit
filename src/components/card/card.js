Drupal.behaviors.card = {
  attach(context) {
    const cardButton = context.querySelector('.card__button');
    if (cardButton) {
      cardButton.addEventListener('click', function cardButtonClick() {
        if (this.hasAttribute('style')) {
          this.removeAttribute('style');
        } else {
          this.style.backgroundColor = 'pink';
        }
      });
    }
  },
};
