const createComment = async () => {
  const table = document.getElementById('table-body');
  const tableRow = document.getElementsByTagName('tr');

  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/comments',
    {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log('Comment posted:', data);
      // Here you can add code to display a success message to the user
    })
    .catch((error) => {
      console.error('Error posting comment:', error);
      // Here you can add code to display an error message to the user
    });

  tableRow.innerHTML = `<td>date</td>
  <td>name</td>
  <td>textarea</td>`;
  table.appendChild(tableRow);
};

export default createComment;

// const commentForm = document.querySelector('#comment-form');
// const commentTextarea = document.querySelector('#comment');
// const submitButton = document.querySelector('#submit-comment');

// submitButton.addEventListener('click', function(event) {
//   event.preventDefault();
//   const commentText = commentTextarea.value;
//   const currentDate = new Date();
//   const commentData = {
//     text: commentText,
//     date: currentDate
//   };
//   fetch('https://your-api-endpoint.com/comments', {
//     method: 'POST',
//     body: JSON.stringify(commentData),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Comment posted:', data);
//     // Here you can add code to display a success message to the user
//   })
//   .catch(error => {
//     console.error('Error posting comment:', error);
//     // Here you can add code to display an error message to the user
//   });
// });
