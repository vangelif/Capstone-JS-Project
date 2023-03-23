const modalShow = () => {
  const modal = document.querySelector('#popup-wrapper');
  modal.style.display = 'block';
};

const modalClose = () => {
  const closeBtn = document.getElementById('close-button');
  const modal = document.querySelector('#popup-wrapper');
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

const getInfos = async (id) => {
  const movieInfo = await fetch(`https://api.tvmaze.com/shows/${id}`).then(
    (result) => result.json()
  );
  return movieInfo;
};

const displayPopup = async (movieInfo) => {
  const movieArray = await movieInfo;
  const popupWrapper = document.querySelector('#popup-wrapper');
  popupWrapper.innerHTML = `
<div id="popup-window">
  <span id="close-button">
    <i class="fas fa-times-circle"></i>
  </span>
  <div class="popup-image">
    <img src="${movieArray.image.medium}" />
  </div>
  <div>
    <h3>${movieArray.name}</h3>
    <p>Movie Description</p>
    <p>
    ${movieArray.summary}`;
  modalClose();
};

export { modalShow, modalClose, displayPopup };
