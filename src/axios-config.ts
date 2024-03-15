import axiosApi from "axios";

const axios = axiosApi.create({
	baseURL: import.meta.env.VITE_API_URL,
});

export default axios;
