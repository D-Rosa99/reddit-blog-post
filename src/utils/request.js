import Axios from "axios";

export const httpRequest = async (method, url, params = {}) =>
  await Axios[method](url, params);
