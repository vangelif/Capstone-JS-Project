import { capstoneApiURL } from './url.js';

const createApp = async () => {
  // const id = localStorage.getItem('Storage-AppId');
  // let appId = id;
  const id = '4SIDbuFvmMSxYGL3UoF8';
  let appId = id;
  if (!id) {
    const response = await fetch(capstoneApiURL, {
      method: 'POST',
    });
    const data = await response.text();
    // localStorage.setItem('Storage-AppId', data);
    appId = data;
  }
  return appId;
};

export default createApp;
