import axios from "axios";

export const queryURL =
  window.location.protocol +
  "//" +
  window.location.hostname +
  ":" +
  window.location.port;

const instance = axios.create();

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

instance.interceptors.request.use(
  (config) => {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    config.headers.common = {
      ...config.headers.common,
      "X-CSRF-TOKEN": csrf,
      "content-type": "text/json",
    };

    if (localStorage.getItem("AuthToken")) {
      config.headers.common = {
        ...config.headers.common,
        Authorization: getCookie(jwt),
      };
    } else {
      config.headers.common = {
        ...config.headers.common,
        Authorization: null,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
