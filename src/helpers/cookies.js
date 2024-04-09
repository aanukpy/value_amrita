const setCookies = (token) => {
  return (document.cookie = `token=${token}; expires=${new Date(
    Date.now() + 86400e3
  ).toUTCString()}; path=/; HttpOnly; Secure; SameSite=Strict`);
};

const getValueFromCookie = (token) => {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(token)) {
      return decodeURIComponent(cookie.substring(token.length));
    }
  }
  return null; // Token not found
};
export { setCookies, getValueFromCookie };
