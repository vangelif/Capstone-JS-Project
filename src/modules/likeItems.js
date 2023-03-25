const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ilWLjX7DiufqJ1ygUhcb/likes';
const getnumberofLikes = async () => {
  const cards = document.querySelectorAll('.cards');
  const likeCount = document.querySelectorAll('.like-count');
  await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      cards.forEach((card, index) => {
        json.forEach((item) => {
          if (item.item_id === card.id) {
            likeCount[index].innerHTML = item.likes;
          }
        });
      });
    });
};

const interactLikeButton = () => {
  const cards = document.querySelectorAll('.cards');
  const likeBtns = document.querySelectorAll('.like-btn');
  const likeCounts = document.querySelectorAll('.like-count');
  likeBtns.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ item_id: cards[index].id }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const json = await response.json();
        likeCounts[index].textContent = json.likes;
      }
      await getnumberofLikes();
    });
  });
};

export { getnumberofLikes, interactLikeButton };
