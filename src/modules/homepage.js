const movieApi = async () => {
  const fetchResult = await fetch('https://api.tvmaze.com/shows');
  const ShowResult = await fetchResult.json();
  const movies = ShowResult.slice(0, 12);
  return movies;
};
movieApi();

const movieList = async () => {
  const allMovies = await movieApi();
  allMovies.forEach((card) => {
    const CardContainer = document.querySelector('.card-container');
    const cardUL = document.createElement('ul');
    const cardLI = document.createElement('li');
    cardLI.className = 'movie-cards';
    cardLI.innerHTML = `<div>
                          <img src=${card.image.original} alt=${card.name} class="movie-img">
                        </div>
                        <a href="${card.officialSite}" class="movie-title" data-id=${card.id}>${card.name}</a>
                        <div class="movie-info">
                          <i class="fa fa-heart" aria-hidden="true"></i>
                          <p>20 likes</p>
                        </div>
                        <button class="comment-button" id="${card.id}" data-target="#popup-wrapper">Comments</button>`;

    cardUL.appendChild(cardLI);
    CardContainer.appendChild(cardUL);
  });
};

// const commentsBtn = document.querySelectorAll('.comment-button');
// console.log(commentsBtn.id);

// document.addEventListener('DOMContentLoaded', () => {
//   // Select the commentsBtn element after the DOM has loaded
//   const commentsBtn = document.querySelectorAll('.comment-button');
//   console.log(commentsBtn);
//   commentsBtn.forEach((button) => {
//     button.addEventListener('click', async (event) => {
//       event.preventDefault();
//       const targetModal = document.querySelector(
//         event.target.getAttribute('data-target')
//       );
//       console.log(`target Model:${targetModal}`);
//       await popup(event);
//       targetModal.style.display = 'block';
//     });
//   });
// });

export { movieApi, movieList };
