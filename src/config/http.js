import axios from "axios";
const baseURL = 'http://localhost:5000/api'

const Http = () => {
  const instance = axios.create({ baseURL, withCredentials: true });

  instance.interceptors.request.use(async (request) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response) {
        const { status } = error.response;

        if (status === 401) {
          localStorage.clear();
          if (localStorage.getItem("access_token")) {
            localStorage.clear();
            window.location.href = "/login";
          } else {
            return error?.response || { error: "An error occurred" };
          }
        } else if (status === 500) {
          // window.location.href = "/server-error";
        }
      }
      return error?.response || { error: "An error occurred" };
    }
  );

  return instance;
};

export default Http();

