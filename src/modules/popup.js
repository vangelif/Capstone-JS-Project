import modalShow from './modalShow.js';
import getShowById from './show.js';

const popup = async (movieCard) => {
  const movieTitle = movieCard.querySelector('.movie-title');
  const movieImgSrc = movieCard.querySelector('.movie-img');
  const modal = document.querySelector('#popup-wrapper');
  const movieId = movieTitle.dataset.id;
  const data = await getShowById(movieId);
  modal.querySelector('.summary').innerHTML = data.summary;
  modal.querySelector('.movie-name').textContent = movieTitle.textContent;
  modal.querySelector('.movie-image').src = movieImgSrc.src;

  modalShow();
};

export default popup;
