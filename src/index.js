import './style.css';
import { movieList } from './modules/homepage.js';
import popup from './modules/popup.js';
import modalClose from './modules/modalClose.js';

document.addEventListener('DOMContentLoaded', async () => {
  await movieList();
  const cardContainer = document.querySelector('.card-container');

  cardContainer.addEventListener('click', async (event) => {
    if (event.target.matches('.comment-button')) {
      const movieCard = event.target.closest('.movie-cards');
      popup(movieCard);
    }
  });
  modalClose();
});
document.addEventListener('DOMContentLoaded', async () => {
  await movieList();
  const xButton = document.getElementById('x-button');
  xButton.addEventListener('click', async () => {
    modalClose();
  });
});
