import axios, {
	InternalAxiosRequestConfig,
	AxiosError,
	AxiosResponse,
} from "axios";

const instance = axios.create({
	baseURL: "http://google.com",
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

instance.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => config,
	(error: AxiosError): Promise<AxiosError> => Promise.reject(error),
);

instance.interceptors.response.use(
	(response: AxiosResponse): AxiosResponse => response,
	(error: AxiosError): Promise<AxiosError> => Promise.reject(error),
);

export default instance;
