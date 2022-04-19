import axios from "axios";

export const httpRequest = (method, url, params = {}, config = null) => {
  if (config) {
    return axios[method](url, params, config);
  }

  return axios[method](url, params);
};
