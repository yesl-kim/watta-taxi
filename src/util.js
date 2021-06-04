export const isEmptyObj = obj => {
  return !Object.keys(obj).length;
};

export const queryToObj = query => {
  const [, q] = query.split('?');
  const obj = {};

  q.split('&').map(el => {
    const [k, v] = el.split('=');
    return (obj[k] = v);
  });

  return obj;
};

export const objToQuery = obj => {
  return (
    '?' +
    Object.entries(obj)
      .map(el => el.join('='))
      .join('&')
  );
};

export const getDate = {
  toFullNum: dateObj => {
    const dateToNum = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(dateObj);
    const [month, day, year] = dateToNum.split('/');
    return `${year}-${month}-${day}`;
  },
  toLongString: dateObj => {
    const dateToNum = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(dateObj);
    const [month, day, year] = dateToNum.split('/');
    return `${year}년 ${month}월 ${day}일`;
  },
  toMediumString: dateObj => {
    return new Intl.DateTimeFormat('ko-KR', {
      month: 'long',
      day: '2-digit',
      weekday: 'short',
    }).format(dateObj);
  },
};

export const customFetch = (api, requestObj = {}, callback) => {
  fetch(api, { method: 'GET', ...requestObj })
    .then(res => res.json())
    .then(callback);
};
