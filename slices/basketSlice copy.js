import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
// const initialState = {
// 	items: [],
// };

const initialState = Cookies.get("BasketCart")
	? { ...JSON.parse(Cookies.get("BasketCart")) }
	: {
			items: [],
	  };

export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		// action
		addToBasket: (state, action) => {
			// action.payload is the product item from the product component
			state.items = [...state.items, action.payload];
			if (action.payload) {
				console.warn(
					`  product Add to Your Basket (id:${action.payload.id})  `
				);
				// state.items = [...state.items, action.payload];
			} else {
				console.warn(
					`Can not Add product (id:${action.payload.id}) to Your cart . `
				);
			}

			// this comment work fine and also check  if item is added to skip
			/* 
			const itemPayload = action.payload;

			// this check if item is added to skip
			const existItem = state.items.find((x) => x.id === itemPayload.id);
			if (existItem) {
				state.items = state.items.map((x) =>
					x.id === existItem.id ? itemPayload : x
				);
			} else {
				state.items = [...state.items, itemPayload];
			} 
			*/
			// add to cookie
			Cookies.set("BasketCart", JSON.stringify(state));
		},
		removeFromBasket: (state, action) => {
			const index = state.items.findIndex(
				(basketItem) => basketItem.id === action.payload.id
			);

			let newBasket = [...state.items];
			if (index >= 0) {
				// the item exist in the basket remove it
				newBasket.splice(index, 1); // remove it
			} else {
				console.warn(
					`Can not remove product (id:${action.payload.id}) as its in Your Cart`
				);
			}
			state.items = newBasket;
			Cookies.set("BasketCart", JSON.stringify(state));
		},
	},
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items; //the name basket

export default basketSlice.reducer;
