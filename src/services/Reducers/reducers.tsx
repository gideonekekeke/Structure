import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iUser } from "../../types";

const initialState = {
	currentUser: {} as iUser,
};

const reducers = createSlice({
	name: "second",
	initialState,
	reducers: {
		StoreUser: (state, { payload }: PayloadAction<iUser>) => {
			state.currentUser = payload;
		},
	},
});

export const { StoreUser } = reducers.actions;

export default reducers.reducer;
