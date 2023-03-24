import getShowById from './show.js';
import { getComments, giveComments } from './comments.js';
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
  // calling the getComments function
  // commmentTable.innerHTML = '';
  const comments = await getComments(movieId);
  if (Array.isArray(comments)) {
    // const commentRow = document.createElement('tr');
    const commentRow = document.createElement('tr');
    comments.forEach((comment) => {
      const commentDate = document.createElement('td');
      commentDate.textContent = `${comment.creation_date}`;
      const commentName = document.createElement('td');
      commentName.textContent = `${comment.username}`;
      const commentInsight = document.createElement('td');
      commentInsight.textContent = `${comment.comment}`;
      const lineBreak = document.createElement('br');
      lineBreak.innerHTML = '';
      commentRow.appendChild(commentDate);
      commentRow.appendChild(commentName);
      commentRow.appendChild(commentInsight);
      commentRow.appendChild(lineBreak);
      commentTable.appendChild(commentRow);
    });
  }

  // listener for creating new comments
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
