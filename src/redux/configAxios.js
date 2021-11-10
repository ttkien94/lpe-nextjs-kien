import axios from "axios";

export const configAxios = (url, method, data) => {
  axios({
    url,
    method,
    data,
  });
};
