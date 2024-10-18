import Http from "../config/http";


export const post = async (query, formData) => {
    try {
        const { data } = await Http.post(query, formData, { withCredentials: true });
        return data;
    } catch (error) {
        return error?.response?.data || { error: "An error occurred" };
    }
};

export const get = async (query) => {
    try {
        const { data } = await Http.get(query);
        return data;
    } catch (error) {
        return error?.response?.data || { error: "An error occurred" };
    }
};

export const deleteData = async (query) => {
    try {
        const { data } = await Http.delete(query);
        return data;
    } catch (error) {
        return error?.response?.data || { error: "An error occurred" };
    }
};

export const put = async (query, formData) => {
    try {
        const { data } = await Http.put(query, formData);
        return data;
    } catch (error) {
        return error?.response?.data || { error: "An error occurred" };
    }
};