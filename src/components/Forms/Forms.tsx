import React from "react";
import { useDispatch } from "react-redux";
import { StoreUser } from "../../services/Reducers/reducers";

const Forms = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<input />
			<button
				onClick={() => {
					dispatch(
						StoreUser({
							name: "gideon",
							email: "gideon@gmail.com",
							password: "sdfhdjfkdkkf",
						}),
					);
				}}></button>
		</div>
	);
};

export default Forms;
