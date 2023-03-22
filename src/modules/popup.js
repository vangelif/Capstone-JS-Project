/* eslint-disable import/no-cycle */
import { movieList } from './homepage.js';

// const popupWrapper = document.getElementById('popup-wrapper');

const popup = async (event) => {
  const targetId = event.target.getAttribute('data-target');
  const popupWrapper = document.querySelector(targetId);
  const movies = await movieList();
  // if (e.target.matches('.comment-button')) {
  // const movies = await movieList();

  // ensure that data is fetched when find needs them
  if (movies && movies.length > 0) {
    const target = movies.find(
      (item) => Number(item.id) === Number(event.target.id)
    );
    console.log('🚀 ~ file: popup.js:19 ~ popup ~ item.id:', item.id);

    const popupItem = `
<div id="popup-window">
  <span id="close-button">
    <i class="fas fa-times-circle"></i>
  </span>
  <div class="popup-image">
    <img src="${target.image.medium}" />
  </div>
  <div>
    <h3>${target.name}</h3>
    <p>${target.summary}</p>
    <h4>Comments</h4>
    <span id="comment-counter">2</span>

    <table>
      <tbody id="table-body"></tbody>
    </table>

    <form>
      <div>
        <input type="text" placeholder="Your name" required />
      </div>
      <div>
        <textarea name="comment" placeholder="Your insight" required></textarea>
      </div>
      <button type="submit">Comment</button>
    </form>
  </div>
</div>`;
    popupWrapper.innerHTML = popupItem;
    popupWrapper.style.display = 'block';
  }
  console.log(
    '🚀 ~ file: popup.js:53 ~ popup ~ event.target.id:',
    event.target.id
  );
  console.log('🚀 ~ file: popup.js:52 ~ popup ~ item.id:', item.id);
  // }
};
// const showPopup = () => {
//   popupWrapper.classList.remove('hide');
// };
export default popup;
