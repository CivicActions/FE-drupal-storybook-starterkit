document.addEventListener('DOMContentLoaded', () => {
  const ctaLink = document.querySelector('.button');
  console.log(ctaLink);

  ctaLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('card button clicked');
  });
});
