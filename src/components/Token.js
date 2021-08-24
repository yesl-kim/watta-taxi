const ACCESS_TOKEN_KEY = 'Watta_token';

export const getToken = () => {
  const token = sessionStorage.getItem(ACCESS_TOKEN_KEY);

  if (token) {
    return token;
  } else {
    alert('토큰이 존재하지 않습니다!');
    return '';
  }
};

export const setToken = token => {
  sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const token = {
  get: getToken,
  set: setToken,
};
