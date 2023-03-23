import './style.css';
import { movieList } from './modules/homepage.js';
import popup from './modules/popup.js';
console.log(789);
document.addEventListener('DOMContentLoaded', async () => {
  await movieList();
  const commentsBtns = document.querySelectorAll('[data-target]');
  console.log(123);
  console.log('commentsBtn: ', commentsBtns);
  commentsBtns.forEach((commentsBtn) => {
    const btnId = commentsBtn.getAttribute('id');
    commentsBtn.addEventListener('click', async () => {
      console.log('btnId: ', btnId);
      popup();
    });
  });
});
console.log(456);
