import './index.css';
import { lodingList } from './data-manager';
import { render, addrender } from './html.render';

const $btn = document.querySelector('.btn');
const $ul = document.querySelector('.nav');

let page = 1;
let id = 'trending';

lodingList(id, 1).then((resData) => render(resData.data));

$ul.addEventListener('click', (event) => {
  id = event.target.id;
  page = 1;
  lodingList(id, 1).then((resData) => render(resData.data));
});

$btn.addEventListener('click', () => {
  page += 1;
  lodingList(id, page).then((resData) => addrender(resData.data));
});
