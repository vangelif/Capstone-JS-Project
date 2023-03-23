const movieApi = async () => {
  const fetchResult = await fetch('https://api.tvmaze.com/shows');
  const ShowResult = await fetchResult.json();
  const movies = ShowResult.slice(0, 132);
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

export { movieApi, movieList };
