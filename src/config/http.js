import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { clearJudge } from "../redux/features/judgeSlice";
import { Bounce, toast } from "react-toastify";

const baseURL = `${BASE_URL}/api`;

const useHttp = () => {
  const { judge } = useAppSelector((state) => state.judge);
  const dispatch = useAppDispatch();

  const instance = axios.create({
    baseURL,
    withCredentials: true
  });

  instance.interceptors.request.use(async (request) => {
    const token = judge?.token;
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
        const { status } = error?.response;

        if (status === 401) {
          toast.error(error?.response?.data?.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce
          });
          dispatch(clearJudge());

          if (judge?.token) {
            dispatch(clearJudge());

            window.location.href = "/judge/login";
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

export default useHttp;
