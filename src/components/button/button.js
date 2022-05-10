Drupal.behaviors.button = {
  attach(context) {
    const linkButton = context.querySelector('a.button');
    if (linkButton) {
      linkButton.addEventListener('click', function buttonClick(e) {
        e.preventDefault();
        if (this.hasAttribute('style')) {
          this.removeAttribute('style');
        } else {
          this.style.backgroundColor = 'blue';
          this.style.color = 'white';
        }
      });
    }
  },
};
