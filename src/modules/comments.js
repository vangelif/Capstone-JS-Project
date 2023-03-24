import { capstoneApiURL } from './url.js';
import createApp from './app.js';

export const getComments = async (movieId) => {
  const appId = await createApp();
  try {
    const response = await fetch(
      `${capstoneApiURL}/${appId}/comments?item_id=${movieId}`,
      {
        method: 'GET',
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Cannot fetch comments.');
  }
};

export const giveComments = async ({ movieId, username, comment }) => {
  const appId = await createApp();
  const response = await fetch(`${capstoneApiURL}/${appId}/comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: movieId,
      username,
      comment,
    }),
  });
  const data = await response.json();
  return data.result;
};
