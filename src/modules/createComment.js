const createCommentElements = (comments) => {
  const commentElements = [];
  const numComments = Array.isArray(comments) ? comments.length : 0;

  const commentRow = document.createElement('li');
  commentRow.textContent = `Comments(${numComments})`;
  commentElements.push(commentRow);

  if (Array.isArray(comments)) {
    comments.forEach((comment) => {
      const commentData = document.createElement('li');
      commentData.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
      commentElements.push(commentData);
    });
  }

  return commentElements;
};

export default createCommentElements;
