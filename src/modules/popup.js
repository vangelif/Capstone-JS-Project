import getShowById from './show.js';
import { getComments, giveComments } from './comments.js';
import modalShow from './modalShow.js';

const popup = async (movieCard) => {
  const movieTitle = movieCard.querySelector('.movie-title');
  const movieImgSrc = movieCard.querySelector('.movie-img');
  const modal = document.querySelector('#popup-wrapper');
  const movieId = movieTitle.dataset.id;
  console.log(movieId);
  const data = await getShowById(movieId);
  // // get past comments already submitted
  const popUpBtn = modal.querySelector('#submit-button');
  const commentForm = modal.querySelector('#comment-form');
  const commentTable = modal.querySelector('#table-body');

  modal.querySelector('.summary').innerHTML = data.summary;
  modal.querySelector('.movie-name').textContent = movieTitle.textContent;
  modal.querySelector('.movie-image').src = movieImgSrc.src;
  // calling the getComments function
  commentTable.innerHTML = '';
  const comments = await getComments(movieId);
  console.log(comments);
  if (Array.isArray(comments)) {
    // const commentRow = document.createElement('tr');
    const commentRow = document.createElement('tr');
    commentRow.textContent = `Comments(${(comments.length += 1)})`;
    commentTable.appendChild(commentRow);
    console.log(comments);
    comments.forEach((comment) => {
      const commentDate = document.createElement('td');
      commentDate.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
      commentTable.appendChild(commentDate);
    });
  }
  modalShow();
  // listener for creating new comments
  popUpBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const comment = document.getElementById('insights').value;
    if (username !== '' || comment !== '') {
      giveComments({ movieId, username, comment });
      const newCommentRow = document.createElement('tr');
      newCommentRow.textContent = `${new Date()
        .toISOString()
        .slice(0, 10)} ${username}: ${comment}`;
      commentTable.appendChild(newCommentRow);
      commentForm.reset();
    }
  });
};

export default popup;
