import './style.css';
// import { displayPopup } from './modules/popup.js';

const commentsBtn = document.getElementById('comments');
const closeBtn = document.getElementById('close-button');
const popUp = document.getElementById('popup-window');

commentsBtn.addEventListener('click', () => {
  popUp.style.visibility = 'visible';
});

closeBtn.addEventListener('click', () => {
  popUp.style.visibility = 'hidden';
});
