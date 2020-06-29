const $list = document.querySelector('#list');

function render(list) {
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

  $list.innerHTML = `<ul>${li.join('')}</ul>`;
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
  console.log(li);
  // html.push(...li);
  // $list.innerHTML = li.join('');
}

export { render, addrender };
