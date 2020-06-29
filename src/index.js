import './index.css';
import { trendingList } from './data-manager';
import { render } from './html.render';

const $btn = document.querySelector('.btn');
const $ul = document.querySelector('.nav');

trendingList().then((resData) => render(resData.data));
