const $list = document.querySelector('#list');

function render(list) {
  const html = list.map(
    (item, index) =>
      `<li data-index="${index}">
        <a href="https://1boon.kakao.com/${item.path}">
          <img src="${item.coverImage}">
          <div>${item.title}</div>
          <div>${item.totalView}</div>
        </a>
    </li>`,
  );

  $list.innerHTML = `<ul>${html.join('')}</ul>`;
}

export { render };
