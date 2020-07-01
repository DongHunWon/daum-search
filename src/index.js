import './index.css';
import { lodingList } from './data-manager';
import { render } from './html.render';

const $btn = document.querySelector('.btn');
const $ul = document.querySelector('.nav');

let page = 1;
let id = 'trending';

lodingList(id, 1).then((resData) => render(resData.data, id));

$ul.addEventListener('click', (event) => {
  event.preventDefault();
  if (
    event.target.id === 'trending' ||
    event.target.id === 'issue' ||
    event.target.id === 'enter'
  ) {
    const prebtn = document.querySelector(`#${id}`);
    prebtn.parentNode.classList.remove('active');
    id = event.target.id;
    page = 1;
    const nextbtn = document.querySelector(`#${id}`);
    nextbtn.parentNode.classList.add('active');
    lodingList(id, 1).then((resData) => render(resData.data, id));
  }
});

$btn.addEventListener('click', () => {
  page += 1;
  lodingList(id, page).then((resData) => render(resData.data, id));
});
