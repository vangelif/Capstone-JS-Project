import './style.css';
import { movieList } from './modules/homepage.js';
import popup from './modules/popup.js';

// const popupWrapper = document.getElementById('popup-wrapper');
// const commentsBtn = document.getElementsByClassName('.comment-button');
const closeBtn = document.getElementById('close-button');
movieList();

document.addEventListener('DOMContentLoaded', () => {
  // Select the commentsBtn element after the DOM has loaded
  const commentsBtn = document.querySelectorAll('[data-target]');
  console.log(commentsBtn);
  commentsBtn.forEach((button) => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      const targetModal = document.querySelector(
        event.target.getAttribute('data-target')
      );
      console.log(`target Model:${targetModal}`);
      await popup(event);
      targetModal.style.display = 'block';
    });
  });
});

// commentsBtn.addEventListener('click', openPopup);
// CardContainer.addEventListener('click', popup);
// document.addEventListener('click', displayPopup);
