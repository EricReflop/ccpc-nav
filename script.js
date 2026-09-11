document.querySelectorAll('.sommaire-item').forEach((item) => {
  const button = item.querySelector('.sommaire-link');
  button.addEventListener('click', () => {
    document.querySelectorAll('.sommaire-item').forEach((other) => {
      other.classList.remove('is-selected');
      other.querySelector('.bullet').classList.remove('selected');
    });
    item.classList.add('is-selected');
    item.querySelector('.bullet').classList.add('selected');

    const target = document.getElementById(button.id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
