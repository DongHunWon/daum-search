const $list = document.querySelector('.list');
let text = [];
let id = 'trending';

function render(list, name) {
  if (id !== name) {
    text = [];
    id = name;
  }
  const li = list.map(
    (item, index) =>
      `<li data-index="${index}">
        <a href="https://1boon.kakao.com/${item.path}" class="list_item">
          <img src="${item.coverImage}">
          <div>${item.title}</div>
          <div>${item.totalView}</div>
        </a>
    </li>`,
  );
  text.push(...li);
  $list.innerHTML = text.join('');
}

function addrender(list) {
  const li = list.map(
    (item, index) =>
      `<li data-index="${index}">
        <a href="https://1boon.kakao.com/${item.path}">
          <img src="${item.coverImage}">
          <div>${item.title}</div>
          <div>${item.totalView}</div>
        </a>
    </li>`,
  );
  text.push(...li);
  $list.innerHTML = text.join('');
}

export { render, addrender };
