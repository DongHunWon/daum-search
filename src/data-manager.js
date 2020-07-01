function lodingList(path, page) {
  return fetch(
    `http://1boon.kakao.com/ch/${path}.json?pagesize=15&page=${page}`,
    {
      method: 'get',
    },
  ).then((res) => res.json());
}

export { lodingList };
