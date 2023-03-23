import getShowById from './show.js';
import { getComments, giveComments } from './comments.js';
import modalShow from './modalShow.js';
import { validate } from 'schema-utils';

const popup = async (movieCard) => {
  const movieTitle = movieCard.querySelector('.movie-title');
  const movieImgSrc = movieCard.querySelector('.movie-img');
  const modal = document.querySelector('#popup-wrapper');
  const movieId = movieTitle.dataset.id;
  const data = await getShowById(movieId);
  modal.querySelector('.summary').innerHTML = data.summary;
  modal.querySelector('.movie-name').textContent = movieTitle.textContent;
  modal.querySelector('.movie-image').src = movieImgSrc.src;

  // get past comments already submitted
  const popUpBtn = modal.querySelector('#submit-button');
  const commentForm = modal.querySelector('#comment-form');
  const commentTable = modal.querySelector('#table-body');

  // commmentTable.innerHTML = '';
  const comments = await getComments(movieId);
  if (Array.isArray(comments)) {
    // const commentRow = document.createElement('tr');
    const commentRow = document.createElement('tr');
    comments.forEach((comment) => {
      const commentData = document.createElement('td');
      commentData.textContent = `${comment.creation_date}
      ${comment.username}
      ${comment.comment}`;
      commentRow.appendChild(commentData);
      commentTable.appendChild(commentRow);
    });
  }

  //listener for creating new comments
  popUpBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const comment = document.getElementById('insights').value;
    if (username !== '' || comment !== '') {
      giveComments({ movieId, username, comment });
      const newCommentRow = document.createElement('tr');
      const newCommentDate = document.createElement('td');
      newCommentDate.textContent = `${new Date().toISOString().slice(0, 16)}`;
      const newCommentName = document.createElement('td');
      newCommentName.textContent = `${username}`;
      const newCommentInsight = document.createElement('td');
      newCommentInsight.textContent = `${comment}`;

      newCommentRow.appendChild(newCommentDate);
      newCommentRow.appendChild(newCommentName);
      newCommentRow.appendChild(newCommentInsight);

      commentTable.appendChild(newCommentRow);
      commentForm.reset();
    }
  });

  modalShow();
};

export default popup;
