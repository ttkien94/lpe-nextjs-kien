import axios from "axios";
import { API_ENDPOINT } from "constant/Api";
import { TOKEN } from "constant/LocalStorage";

// Get using Axios
export function fetchData({ url }) {
  return axios({
    method: "GET",
    url,
  });
}

export function fetchWithToken({ method, url, data = {} }) {
  const token = localStorage.get(TOKEN);

  return axios({
    method,
    url: API_ENDPOINT + url,
    data,
    headers: {
      token: `${token}`,
    },
  });
}
