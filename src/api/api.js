import useHttp from "../config/http";

// Custom hook to manage HTTP requests
export const useHttpRequests = () => {
  const Http = useHttp();

  const post = async (query, formData) => {
    try {
      const { data } = await Http.post(query, formData, { withCredentials: true });
      return data;
    } catch (error) {
      return error?.response?.data || { error: "An error occurred" };
    }
  };

  const get = async (query) => {
    try {
      const { data } = await Http.get(query);
      return data;
    } catch (error) {
      return error?.response?.data || { error: "An error occurred" };
    }
  };

  const deleteData = async (query) => {
    try {
      const { data } = await Http.delete(query);
      return data;
    } catch (error) {
      return error?.response?.data || { error: "An error occurred" };
    }
  };

  const put = async (query, formData) => {
    try {
      const { data } = await Http.put(query, formData);
      return data;
    } catch (error) {
      return error?.response?.data || { error: "An error occurred" };
    }
  };

  // Return all the methods to use them in your components
  return {
    post,
    get,
    deleteData,
    put,
  };
};
