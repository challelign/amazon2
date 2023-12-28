"use client";
import { store } from "@/app/store";
import { Provider } from "react-redux";
const StoreProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
