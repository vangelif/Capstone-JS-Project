const popupWrapper = document.getElementById('popup-wrapper');

const displayPopup = () => {
  popupWrapper.innerHTML = `
<div id="popup-window">
  <span id="close-button">
    <i class="fas fa-times-circle"></i>
  </span>
  <div class="popup-image">
    <img src="" />
  </div>
  <div>
    <h3>Movie Title</h3>
    <p>Movie Description</p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum recusandae
      ex modi totam, molestiae a eaque laboriosam nostrum qui accusantium. Neque
      nesciunt mollitia amet totam. Explicabo aliquid quos odio veniam. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nesciunt!
      Ratione officiis velit libero eos! Ad, laborum inventore. Iste,
      cupiditate. Incidunt voluptates quisquam quaerat ab, quos libero amet
      similique beatae magni, voluptate, ad adipisci odio? Corporis eius ea
      culpa perferendis atque deleniti qui quisquam, voluptates amet non ipsa
      enim.
    </p>
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
</div>;
`;
};

export default displayPopup;
