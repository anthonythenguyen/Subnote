import axios from "axios";

export const queryURL =
  window.location.protocol +
  "//" +
  window.location.hostname +
  ":" +
  window.location.port;

const instance = axios.create();
instance.defaults.withCredentials = true;

instance.interceptors.request.use(
  (config) => {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    config.headers.common = {
      ...config.headers.common,
      "X-CSRF-TOKEN": csrf,
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
