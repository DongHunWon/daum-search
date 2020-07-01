const $list = document.querySelector('.list');
let text = [];
let id = 'trending';

function render(list, name) {
  if (id !== name) {
    text = [];
    id = name;
  }
  const li = list.map(
    (item) =>
      `<li class="lst">
        <a href="https://1boon.kakao.com/${item.path}" class="list_item">
          <div class="list_img">
            <img src="${item.coverImage}">
          </div>
          <div class="list_content">
            <div class='list_title'>${item.title}</div>
            <div class="list_view">view : ${item.totalView}</div>
          </div>
        </a>
    </li>`,
  );
  text.push(...li);
  $list.innerHTML = text.join('');
}

export { render };
