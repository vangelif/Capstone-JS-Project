import { getComments } from './comments.js';

const modalShow = async (movieId, load) => {
  if (!load) {
    const commentTable = document.querySelector('#table-body');
    commentTable.innerHTML = '';
    const comments = await getComments(movieId);

    if (Array.isArray(comments)) {
      const commentRow = document.createElement('tr');
      commentRow.textContent = `Comments(${(comments.length -= 1)})`;
      commentTable.appendChild(commentRow);

      comments.forEach((comment) => {
        const commentDate = document.createElement('td');
        commentDate.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
        commentTable.appendChild(commentDate);
      });
    }

    // Set the flag to true after loading the comments for the first time
    load = true;
  }
  const modal = document.querySelector('#popup-wrapper');
  const movieTitle = modal.querySelector('.movie-name');
  movieTitle.dataset.id = movieId;
  modal.style.display = 'block';
};
export default modalShow;
