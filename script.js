document.querySelectorAll('.sommaire-item').forEach((item) => {
  item.querySelector('.sommaire-link').addEventListener('click', () => {
    document.querySelectorAll('.sommaire-item').forEach((other) => {
      other.classList.remove('is-selected');
      other.querySelector('.bullet').classList.remove('selected');
    });
    item.classList.add('is-selected');
    item.querySelector('.bullet').classList.add('selected');
  });
});
