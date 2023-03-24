import './style.css';
import { movieList } from './modules/homepage.js';
import popup from './modules/popup.js';
import modalClose from './modules/modalClose.js';
// import createComment from './modules/app.js';

document.addEventListener('DOMContentLoaded', async () => {
  await movieList();
  const cardContainer = document.querySelector('.card-container');
  const xButton = document.getElementById('x-button');
  // const submitComment = document.getElementById('submit-button');

  cardContainer.addEventListener('click', async (event) => {
    if (event.target.matches('.comment-button')) {
      const movieCard = event.target.closest('.movie-cards');
      popup(movieCard);
    }
  });

  xButton.addEventListener('click', async () => {
    modalClose();
  });
});
