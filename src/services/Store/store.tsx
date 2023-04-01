import { reducer } from "../Reducers";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		reducer,
	},
});

export default store;
