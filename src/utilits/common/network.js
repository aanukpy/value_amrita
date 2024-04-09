import connect from "../../config/connect";
import querystring from "query-string";
import { getValueFromCookie } from "../../helpers/cookies";

let abortController = new AbortController();

const returnFetch = async (url, options) => {
  const newOptions = options;

  newOptions.headers = {
    ...newOptions.headers,
    Authorization: getValueFromCookie("token="),
  };

  let response = {};
  response = await fetch(url, newOptions);
  return response;
};
const returnPromise = async (url, options) => {
  const newOptions = options;
  newOptions.headers = {
    ...newOptions.headers,
    "Content-Type": "application/json",
  };
  let response = {};
  response = await fetch(url, newOptions);
  return response;
};

const get = ({ url, signal = abortController.signal, data }) => {
  return returnFetch(`${connect()}${url}?${querystring.stringify(data)}`, {
    method: "GET",
    signal,
    data,
  });
};
const post = ({ url, data = {}, signal }) => {
  let signal1;
  if (signal) signal1 = signal;
  else signal1 = abortController.signal;
  return returnPromise(`${connect()}${url}`, {
    method: "POST",
    body: JSON.stringify(data),
    signal: signal1,
  });
};
const network = { get, post };

// export { network };
export default network;
