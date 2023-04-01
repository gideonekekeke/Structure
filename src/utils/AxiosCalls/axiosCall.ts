import axios from "./axios";

export const FetchUser = async () => {
	return await axios
		.get("/user")
		.then((res) => res.data)
		.catch((err) => {
			throw err;
		});
};
