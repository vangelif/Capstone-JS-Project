import { getComments } from './comments.js';
import createCommentElements from './createComment.js';

const modalShow = async (movieId, load) => {
  if (!load) {
    const commentTable = document.querySelector('#table-body');
    commentTable.innerHTML = '';
    const comments = await getComments(movieId);
    const commentElements = createCommentElements(comments);
    commentElements.forEach((element) => commentTable.appendChild(element));
    load = true;
  }
  const modal = document.querySelector('#popup-wrapper');
  const movieTitle = modal.querySelector('.movie-name');
  movieTitle.dataset.id = movieId;
  modal.style.display = 'block';
};
export default modalShow;
