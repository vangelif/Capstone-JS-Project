import getShowById from './show.js';
import { giveComments } from './comments.js';
import modalShow from './modalShow.js';

const popup = async (movieCard) => {
  const movieTitle = movieCard.querySelector('.movie-title');
  const movieImgSrc = movieCard.querySelector('.movie-img');
  const modal = document.querySelector('#popup-wrapper');
  const movieId = movieTitle.dataset.id;
  const data = await getShowById(movieId);
  // // get past comments already submitted
  const popUpBtn = modal.querySelector('#submit-button');
  const commentForm = modal.querySelector('#comment-form');
  const commentTable = modal.querySelector('#table-body');

  modal.querySelector('.summary').innerHTML = data.summary;
  modal.querySelector('.movie-name').textContent = movieTitle.textContent;
  modal.querySelector('.movie-image').src = movieImgSrc.src;

  // Add a flag to track whether comments have already been loaded
  const load = false;

  // listener for creating new comments
  popUpBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const name = modal.querySelector('#username').value;
    const comments = modal.querySelector('#insights').value;
    const movieTitle = modal.querySelector('.movie-name');
    const movieId = movieTitle.dataset.id;
    if (name !== '' || comments !== '') {
      giveComments({ movieId, name, comments });
      const newCommentRow = document.createElement('li');
      newCommentRow.textContent = `${new Date()
        .toISOString()
        .slice(0, 10)} ${name}: ${comments}`;
      commentTable.appendChild(newCommentRow);
      commentForm.reset();
    }
  });

  // Call loadComments when the modal is shown
  modalShow(movieId, load);
};

export default popup;
