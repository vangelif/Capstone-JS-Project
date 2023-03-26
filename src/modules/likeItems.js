/* eslint-disable */
import { movieList } from './homepage.js';

const url =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ilWLjX7DiufqJ1ygUhcb/likes';

const getnumberofLikes = async () => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const updateLikeCount = (cards, likeCounts, json) => {
  cards.forEach((card, index) => {
    const likeCount = json.find((item) => item.item_id === card.id)?.likes || 0;
    likeCounts[index].textContent = likeCount;
  });
};

const interactLikeButton = async () => {
  const cards = document.querySelectorAll('.cards');
  const likeBtns = document.querySelectorAll('.like-btn');
  const likeCounts = document.querySelectorAll('.like-count');
  const json = await getnumberofLikes();
  updateLikeCount(cards, likeCounts, json);
  likeBtns.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ item_id: cards[index].id }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        json[index].likes += 1;
        updateLikeCount(cards, likeCounts, json);
        movieList();
      }
    });
  });
};

export { getnumberofLikes, interactLikeButton };
